import { GridColDef } from "@mui/x-data-grid";

const UserClientListColumns = (_setActivateMoadal: any, _setSelectedUser: any, _setDeleteMoadal: any) => {

    const listColumns: GridColDef[] = [
      {
        field: 'id',
        headerName: 'ID',
      },
      {
        field: 'name',
        headerName: "User's Name",
        flex: 1,
      },
      {
        field: 'email',
        headerName: "User's Email",
        flex: 1,
      },
      {
        field: 'role',
        headerName: "User's Role",
        flex: 1,
        renderCell: () => <>User</>,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        flex: 1,
      },
    ];
    return listColumns
}

export default UserClientListColumns
