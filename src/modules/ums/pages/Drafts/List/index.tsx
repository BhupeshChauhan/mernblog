import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { PostAPI } from '../../../../cms/apis/PostApi';
import DraftListColumns from '../../../../cms/data/list/draftListColumns';

const Draft = () => {

  return (
    <CustomList
      addLink={'/draft/add'}
      addLinkTitle={'Add Draft'}
      columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => DraftListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
      deleteAPI={(payload: any) => PostAPI.deactivate(payload)}
      activateAPI={(payload: any) => PostAPI.activate(payload)}
      getAPI={(payload: any) => PostAPI.getAllDraft(payload)}
    />
  );
};

export default Draft;
