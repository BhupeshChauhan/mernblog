import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { UsersApi } from '../../../apis/UsersApi';
import UserClientListColumns from '../../../data/list/userClientListColumns';

const ClientUser = () => {

  return (
    <>
      <CustomList
    addLink={'/users/add'}
    addLinkTitle={'Add Users'}
    columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => UserClientListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
    deleteAPI={(payload: any) => UsersApi.deactivate(payload)}
    activateAPI={(payload: any) => UsersApi.activate(payload)}
    getAPI={(payload: any) => UsersApi.getAllClient(payload)}
  />
    </>
  );
};

export default ClientUser;
