import React from 'react'
import { Button, Chip, Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { useGlobalContext } from '../../../context/GlobalContext';
import checkModulePermission, { checkPermissionDelete, moduleAction, moduleName } from '../../../utils/checkModulePermission';
import { Link, redirect } from 'react-router-dom';
import CustomMenu from '../../../components/CustomMenu';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import CustomDataGrid from '../../../components/CustomDataGrid';
import CustomModal from '../../../components/CustomModal';
import { RolesApi } from '../../../apis/RolesApi';

const UsersList = () => {
  const [isLoading, setisLoading] = useState(false);
  const [DeleteMoadal, setDeleteMoadal] = useState(false);
  const [ActivateMoadal, setActivateMoadal] = useState(false);
  const [roles, setRoles] = useState([]);
  const [SelectedRole, setSelectedRole] = useState<any>({});
  const { userData } = useGlobalContext();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (params) => {
        const menuItem = [
          {
            label: <Typography color="blue">Edit</Typography>,
            onClick: () => redirect(`/roles/edit/${params?.row?.id}`),
            disable: !checkModulePermission(
              userData,
              moduleName.ROLES,
              moduleAction.EDIT,
            ),
          },
          {
            label: (
              <Typography color={params.row.inActive ? "green" : "red"}>
                {params.row.inActive ? "Activate" : "Deactivate"}
              </Typography>
            ),
            onClick: () => {
              if (params.row.inActive) {
                setActivateMoadal(true);
                setSelectedRole(params.row);
              } else if (!params.row.inActive) {
                setDeleteMoadal(true);
                setSelectedRole(params.row);
              }
            },

            disable: checkPermissionDelete(userData, params, moduleName.ROLES),
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
      field: "name",
      headerName: "Roles Name",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Roles Description",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      renderCell: (params: any) => {
        return <>{format(parseISO(params?.row?.createdAt), "MMMM dd, yyyy")}</>;
      },
    },
    {
      field: "inActive",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        if (params?.row?.inActive) {
          return (
            <Chip label="Deactivated" color="warning" variant="outlined" />
          );
        } else if (!params?.row?.inActive) {
          return <Chip label="Active" color="primary" variant="outlined" />;
        }
        return null;
      },
    },
  ];

  const handleDelete = async () => {
    setisLoading(true);
    // await deleteRole(SelectedRole.id);
    // await fetchRoles().then((res) => {
    //   setRoles(res);
    // });
    setDeleteMoadal(false);
    setSelectedRole({});
    setisLoading(false);
  };

  const handleActivate = async () => {
    setisLoading(true);
    // await activateRole(SelectedRole.id);
    // await fetchRoles().then((res) => {
    //   setRoles(res);
    // });
    setActivateMoadal(false);
    setSelectedRole({});
    setisLoading(false);
  };
  useEffect(() => {
    setisLoading(true);
    RolesApi.getAll().then((categories) => {
      // response handling
      setRoles(categories)
      setisLoading(false)
    })
  }, []);

  return (
    <>
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDataGrid
        title="Roles List"
        // subtitle="All listed Blogs"
        action={
          <Link to={"/roles/add"}>
            <Button
              variant="outlined"
              // disabled={
              //   !checkModulePermission(
              //     userData,
              //     moduleName.ROLES,
              //     moduleAction.ADD,
              //   )
              // }
            >
              Create Role
            </Button>
          </Link>
        }
        columns={columns}
        rows={roles ? roles : []}
        pageSize={10}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
      />
      <CustomModal
        open={DeleteMoadal}
        title={`Do you want to Deactivate ${SelectedRole?.name} Role`}
        content={
          "Note: If you Deactivate this role all the users associated with this role will also be deactivated."
        }
        handleClose={() => {
          setDeleteMoadal(false);
          setSelectedRole({});
        }}
        onOk={handleDelete}
        onCancel={() => {
          setDeleteMoadal(false);
          setSelectedRole({});
        }}
      />
      <CustomModal
        open={ActivateMoadal}
        title={`Do you want to activate ${SelectedRole?.name} Role`}
        content={
          "Note: If you activate this role all the users associated with this role will also be activated."
        }
        handleClose={() => {
          setActivateMoadal(false);
          setSelectedRole({});
        }}
        onOk={handleActivate}
        onCancel={() => {
          setActivateMoadal(false);
          setSelectedRole({});
        }}
      />
    </>
  );
};

export default UsersList;
