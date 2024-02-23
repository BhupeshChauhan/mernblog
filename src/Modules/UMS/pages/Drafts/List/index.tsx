import CustomList from '../../../../../Components/CustomPageLayout/CustomList';
import { PostAPI } from '../../../../CMS/apis/PostApi';
import DraftListColumns from '../../../../CMS/data/list/draftListColumns';

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
