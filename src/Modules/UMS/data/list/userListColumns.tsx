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

const UserListColumns = (setActivateMoadal: any, setSelectedUser: any, setDeleteMoadal: any) => {
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
                onClick: () => navigate(`/users/edit/${params?.row?._id}`),
                disable: !checkModulePermission(userData, moduleName.USERS, moduleAction.EDIT),
              },
              {
                label: (
                  <Typography color={params.row.personal_info.inActive ? 'green' : 'red'}>
                    {params.row.personal_info.inActive ? 'Activate' : 'Deactivate'}
                  </Typography>
                ),
                onClick: () => {
                  if (params.row.personal_info.inActive) {
                    setActivateMoadal(true);
                    setSelectedUser(params.row);
                  } else if (!params.row.personal_info.inActive) {
                    setDeleteMoadal(true);
                    setSelectedUser(params.row);
                  }
                },
                disable: checkPermissionDelete(userData, params, moduleName.USERS),
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
          field: 'profilePicture',
          headerName: 'Profile Picture',
          flex: 1,
          renderCell: (params) => {
            return <img src={params.row.personal_info.profile_img} width={100} height={60} />;
          },
        },
        {
          field: 'bio',
          headerName: "User's Bio",
          flex: 1,
          renderCell: (params) => {
            return <p>{params.row.personal_info.bio}</p>;
          },
        },
        {
          field: 'name',
          headerName: "User's Name",
          flex: 1,
          renderCell: (params) => {
            return <p>{params.row.personal_info.fullname}</p>;
          },
        },
        {
          field: 'email',
          headerName: "User's Email",
          flex: 1,
          renderCell: (params) => {
            return <p>{params.row.personal_info.email}</p>;
          },
        },
        {
          field: 'role',
          headerName: "User's Role",
          flex: 1,
          renderCell: (params) => {
            return <p>{params.row.roles.name}</p>;
          },
        },
        {
          field: 'joinedAt',
          headerName: 'Created At',
          flex: 1,
          renderCell: (params: any) => {
            return <>{format(parseISO(params?.row?.joinedAt), 'MMMM dd, yyyy')}</>;
          },
        },
        {
          field: 'inActive',
          headerName: 'Status',
          flex: 1,
          renderCell: (params: any) => {
            if (params?.row?.personal_info?.inActive) {
              return <Chip label='Deactivated' color='warning' variant='outlined' />;
            } else if (!params?.row?.personal_info?.inActive) {
              return <Chip label='Active' color='primary' variant='outlined' />;
            }
            return null;
          },
        },
      ];
    return listColumns
}

export default UserListColumns
