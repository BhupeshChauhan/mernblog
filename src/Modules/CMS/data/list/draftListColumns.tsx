import { GridColDef } from "@mui/x-data-grid";
import { Chip, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import checkModulePermission, {
    checkPermissionDelete,
    moduleAction,
    moduleName,
} from '../../../../Utils/checkModulePermission';
import { useGlobalContext } from '../../../../Context/GlobalContext';
import CustomMenu from '../../../../Components/CustomMenu';
import { format, parseISO } from 'date-fns';

const DraftListColumns = (setActivateMoadal: any, setSelectedPost: any, setDeleteMoadal: any) => {
    const navigate = useNavigate();
    const { userData } = useGlobalContext();

    const listColumns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            renderCell: (params) => {
                const menuItem = [
                    {
                        label: <Typography color='blue'>Edit</Typography>,
                        onClick: () => navigate(`/draft/edit/${params?.row?._id}`),
                        disable: !checkModulePermission(userData, moduleName.POST, moduleAction.EDIT),
                    },
                    {
                        label: (
                            <Typography color={params.row.inActive ? 'green' : 'red'}>
                                {params.row.inActive ? 'Activate' : 'Deactivate'}
                            </Typography>
                        ),
                        onClick: () => {
                            if (params.row.inActive) {
                                setActivateMoadal(true);
                                setSelectedPost(params.row);
                            } else if (!params.row.inActive) {
                                setDeleteMoadal(true);
                                setSelectedPost(params.row);
                            }
                        },

                        disable: checkPermissionDelete(userData, params, moduleName.POST),
                    },
                ];
                return (
                    <Grid container>
                        <Grid item xs={10}>
                            {params.value}
                        </Grid>
                        <Grid item xs={2}>
                            <CustomMenu menuItem={menuItem} />
                        </Grid>
                    </Grid>
                );
            },
        },
        {
            field: 'banner',
            headerName: 'Featured Image',
            flex: 1,
            renderCell: (params) => {
                return <img src={params.value} width={100} height={60} />;
            },
        },
        {
            field: 'title',
            headerName: 'Title',
            flex: 1,
        },
        {
            field: 'categories',
            headerName: 'Categories',
            flex: 1,
        },
        {
            field: 'tags',
            headerName: 'Tags',
            flex: 1,
        },
        {
            field: 'excerpt',
            headerName: 'Excerpt',
            flex: 1,
        },
        {
            field: 'publishedAt',
            headerName: 'Created Date',
            flex: 1,
            renderCell: (params: any) => {
                return (
                    <>
                        {params?.row?.publishedAt
                            ? format(parseISO(params?.row?.publishedAt), 'MMMM dd, yyyy')
                            : null}
                    </>
                );
            },
        },
        {
            field: 'visible',
            headerName: 'visible',
            flex: 1,
        },
        {
            field: 'postStatus',
            headerName: 'Post Status',
            flex: 1,
            renderCell: (params: any) => {
                if (!params?.row?.draft) {
                    return <Chip label='Published' color='success' variant='filled' />;
                }
                if (params?.row?.draft) {
                    return <Chip label='Drafted' color='primary' variant='filled' />;
                }
                return null;
            },
        },
        {
            field: 'inActive',
            headerName: 'Status',
            flex: 1,
            renderCell: (params: any) => {
                if (params?.row?.inActive) {
                    return <Chip label='Deactivated' color='warning' variant='outlined' />;
                } else if (!params?.row?.inActive) {
                    return <Chip label='Active' color='primary' variant='outlined' />;
                }
                return null;
            },
        },
    ];
    return listColumns
}

export default DraftListColumns
