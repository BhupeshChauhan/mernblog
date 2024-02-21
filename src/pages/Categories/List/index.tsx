import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import CustomList from '../../../components/CustomPageLayout/CustomList';
import { Chip, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import checkModulePermission, {
  checkPermissionDelete,
  moduleAction,
  moduleName,
} from '../../../utils/checkModulePermission';
import { useGlobalContext } from '../../../context/GlobalContext';
import CustomMenu from '../../../components/CustomMenu';
import { format, parseISO } from 'date-fns';
import { CategoriesApi } from '../../../apis/CategoriesApi';

const Categories = () => {
  const [isLoading, setisLoading] = useState(false);
  const [deleteMoadal, setDeleteMoadal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [activateMoadal, setActivateMoadal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { userData } = useGlobalContext();

  const handleDelete = () => {
    setisLoading(true);
    CategoriesApi.deactivate(selectedCategory).then((categories) => {
      // response handling
      setData(categories);
      setisLoading(false);
    });
    setDeleteMoadal(false);
    setSelectedCategory({});
    setisLoading(false);
  };

  const handleActivate = () => {
    setisLoading(true);
    CategoriesApi.activate(selectedCategory).then((categories) => {
      // response handling
      setData(categories);
      setisLoading(false);
    });
    setActivateMoadal(false);
    setSelectedCategory({});
    setisLoading(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: (params) => {
        const menuItem = [
          {
            label: <Typography color='blue'>Edit</Typography>,
            onClick: () => navigate(`/categories/edit/${params?.row?._id}`),
            disable: !checkModulePermission(userData, moduleName.CATEGORIES, moduleAction.EDIT),
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
                setSelectedCategory(params.row);
              } else if (!params.row.inActive) {
                setDeleteMoadal(true);
                setSelectedCategory(params.row);
              }
            },

            disable: checkPermissionDelete(userData, params, moduleName.CATEGORIES),
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
      field: 'featuredImage',
      headerName: 'Featured Image',
      flex: 1,
      renderCell: (params) => {
        return <img src={params.value} width={100} height={60} />;
      },
    },
    {
      field: 'name',
      headerName: 'Category Name',
      flex: 1,
    },
    {
      field: 'slug',
      headerName: 'Category Slug',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
      renderCell: (params: any) => {
        return <>{format(parseISO(params?.row?.createdAt), 'MMMM dd, yyyy')}</>;
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

  useEffect(() => {
    setisLoading(true);
    CategoriesApi.getAll().then((categories) => {
      // response handling
      setData(categories);
      setisLoading(false);
    });
  }, []);

  return (
    <CustomList
      isLoading={isLoading}
      pageTitle={'Categories List'}
      addLink={'/categories/add'}
      addLinkTitle={'Add Categories'}
      data={data}
      columnsDef={columns}
      DeleteMoadal={deleteMoadal}
      setDeleteMoadal={setDeleteMoadal}
      handleDelete={handleDelete}
      ActivateMoadal={activateMoadal}
      setActivateMoadal={setActivateMoadal}
      handleActivate={handleActivate}
      SelectedPost={selectedCategory}
      setSelectedPost={setSelectedCategory}
    />
  );
};

export default Categories;
