import React from 'react';
import { Chip, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import { useGlobalContext } from '../../../context/GlobalContext';
import checkModulePermission, {
  checkPermissionDelete,
  moduleAction,
  moduleName,
} from '../../../utils/checkModulePermission';
import { useNavigate } from 'react-router-dom';
import CustomMenu from '../../../components/CustomMenu';
import { UsersApi } from '../../../apis/UsersApi';
import CustomList from '../../../components/CustomPageLayout/CustomList';

const UsersList = () => {
  const [isLoading, setisLoading] = useState(false);
  const [DeleteMoadal, setDeleteMoadal] = useState(false);
  const [ActivateMoadal, setActivateMoadal] = useState(false);
  const [SelectedUser, setSelectedUser] = useState<any>({});
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { userData } = useGlobalContext();

  const columns: GridColDef[] = [
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
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img src={params.row.personal_info.profile_img} width={100} height={60} />;
      },
    },
    {
      field: 'bio',
      headerName: "User's Bio",
      flex: 1,
      renderCell: (params) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <p>{params.row.personal_info.bio}</p>;
      },
    },
    {
      field: 'name',
      headerName: "User's Name",
      flex: 1,
      renderCell: (params) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <p>{params.row.personal_info.fullname}</p>;
      },
    },
    {
      field: 'email',
      headerName: "User's Email",
      flex: 1,
      renderCell: (params) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <p>{params.row.personal_info.email}</p>;
      },
    },
    {
      field: 'role',
      headerName: "User's Role",
      flex: 1,
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

  const handleDelete = () => {
    setisLoading(true);
    UsersApi.deactivate({id: SelectedUser.id}).then((users) => {
      // response handling
      setUsers(users);
      setisLoading(false);
    });
    setDeleteMoadal(false);
    setSelectedUser({});
    setisLoading(false);
  };

  const handleActivate = () => {
    setisLoading(true);
    UsersApi.activate({id: SelectedUser.id}).then((users) => {
      // response handling
      setUsers(users);
      setisLoading(false);
    });
    setActivateMoadal(false);
    setSelectedUser({});
    setisLoading(false);
  };

  useEffect(() => {
    setisLoading(true);
    UsersApi.getAll()
      .then((products) => {
        // response handling
        setUsers(products);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  }, []);

  return (
    <CustomList
      isLoading={isLoading}
      pageTitle={'Users List'}
      addLink={'/users/add'}
      addLinkTitle={'Add Users'}
      data={Users}
      columnsDef={columns}
      DeleteMoadal={DeleteMoadal}
      setDeleteMoadal={setDeleteMoadal}
      handleDelete={handleDelete}
      ActivateMoadal={ActivateMoadal}
      setActivateMoadal={setActivateMoadal}
      handleActivate={handleActivate}
      SelectedPost={SelectedUser}
      setSelectedPost={setSelectedUser}
    />
  );
};

export default UsersList;
