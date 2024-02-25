import { RolesApi } from '../../../../UMS/apis/RolesApi';
import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import RolesListColumns from '../../../../UMS/data/list/rolesListColumns';

const UsersList = () => {

  return (
    <>
    <CustomList
      addLink={'/roles/add'}
      addLinkTitle={'Add Roles'}
      columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => RolesListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
      deleteAPI={(payload: any) => RolesApi.deactivate(payload)}
      activateAPI={(payload: any) => RolesApi.activate(payload)}
      getAPI={(payload: any) => RolesApi.getAll(payload)}
    />
    </>
  );
};

export default UsersList;
