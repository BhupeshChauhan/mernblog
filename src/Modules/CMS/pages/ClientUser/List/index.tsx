import { UsersApi } from '../../../../UMS/apis/UsersApi';
import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import UserClientListColumns from '../../../../UMS/data/list/userClientListColumns';

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
