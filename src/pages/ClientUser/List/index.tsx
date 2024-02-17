import React from 'react'
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import CustomDataGrid from '../../../components/CustomDataGrid';

const ClientUser = () => {
  const [Users, setUsers] = useState([]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "User's Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "User's Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "User's Role",
      flex: 1,
      renderCell: (params) => <>User</>,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
  ];
  return (
    <>
      {/* {isLoading ? <CustomCircularProgress color="inherit" /> : <></>} */}
      <CustomDataGrid
        title="Users List"
        // subtitle="All listed Blogs"
        columns={columns}
        rows={Users}
        pageSize={10}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
      />
    </>
  );
};

export default ClientUser;
