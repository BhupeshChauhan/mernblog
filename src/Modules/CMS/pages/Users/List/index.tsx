import { UsersApi } from '../../../../UMS/apis/UsersApi';
import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import UserListColumns from '../../../../UMS/data/list/userListColumns';

const UsersList = () => {

  return (
    <CustomList
    addLink={'/users/add'}
    addLinkTitle={'Add Users'}
    columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => UserListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
    deleteAPI={(payload: any) => UsersApi.deactivate(payload)}
    activateAPI={(payload: any) => UsersApi.activate(payload)}
    getAPI={(payload: any) => UsersApi.getAll(payload)}
  />
  );
};

export default UsersList;
