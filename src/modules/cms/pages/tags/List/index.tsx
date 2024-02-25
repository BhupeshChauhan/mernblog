import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { TagsApi } from '../../../apis/tagsApi';
import tagsListColumns from '../../../data/list/tagsListColumns';

const Tags = () => {
  return (
    <CustomList
      addLink={'/tags/add'}
      addLinkTitle={'Add Tags'}
      columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => tagsListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
      deleteAPI={(payload: any) => TagsApi.deactivate(payload)}
      activateAPI={(payload: any) => TagsApi.activate(payload)}
      getAPI={(payload: any) => TagsApi.getAll(payload)}
    />
  );
};

export default Tags;
