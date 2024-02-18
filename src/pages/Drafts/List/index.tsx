import { GridColDef } from '@mui/x-data-grid';
import CustomList from '../../../components/CustomPageLayout/CustomList';
import React, { useEffect, useState } from 'react';
import { Chip, Grid, Typography } from '@mui/material';
import { redirect } from 'react-router-dom';
import checkModulePermission, {
  checkPermissionDelete,
  moduleAction,
  moduleName,
} from '../../../utils/checkModulePermission';
import { useGlobalContext } from '../../../context/GlobalContext';
import CustomMenu from '../../../components/CustomMenu';
import { format, parseISO } from 'date-fns';
import { PostAPI } from '../../../apis/PostApi';

const Draft = () => {
  const [isLoading, setisLoading] = useState(false);
  const [deleteMoadal, setDeleteMoadal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(false);
  const [activateMoadal, setActivateMoadal] = useState(false);
  const [data, setData] = useState(false);

  const { userData } = useGlobalContext();

  function handleActivate() {}
  function handleDelete() {}
  function getPosts() {}

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: (params) => {
        const menuItem = [
          {
            label: <Typography color='blue'>Edit</Typography>,
            onClick: () => redirect(`/draft/edit/${params?.row?.id}`),
            disable: !checkModulePermission(userData, moduleName.DRAFT, moduleAction.EDIT),
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

            disable: checkPermissionDelete(userData, params, moduleName.DRAFT),
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
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
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
      field: 'createdAt',
      headerName: 'Created Date',
      flex: 1,
      renderCell: (params: any) => {
        return <>{format(parseISO(params?.row?.createdAt), 'MMMM dd, yyyy')}</>;
      },
    },
    {
      field: 'visibility',
      headerName: 'visibility',
      flex: 1,
    },
    {
      field: 'postStatus',
      headerName: 'Post Status',
      flex: 1,
      renderCell: (params: any) => {
        if (params?.row?.isPublish) {
          return <Chip label='Published' color='success' variant='filled' />;
        }
        if (params?.row?.isDraft) {
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

  useEffect(() => {
    PostAPI.getAll().then((products) => {
      // response handling
      setData(products);
    });
  }, []);

  return (
    <CustomList
      isLoading={isLoading}
      pageTitle={'Draft List'}
      addLink={'/draft/add'}
      addLinkTitle={'Add Draft'}
      data={data}
      columnsDef={columns}
      DeleteMoadal={deleteMoadal}
      setDeleteMoadal={setDeleteMoadal}
      handleDelete={handleDelete}
      ActivateMoadal={activateMoadal}
      setActivateMoadal={setActivateMoadal}
      handleActivate={handleActivate}
      SelectedPost={selectedPost}
      setSelectedPost={setSelectedPost}
    />
  );
};

export default Draft;
