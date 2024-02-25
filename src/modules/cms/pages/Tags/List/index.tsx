import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { TagsApi } from '../../../../cms/apis/TagsApi';
import tagsListColumns from '../../../../cms/data/list/tagsListColumns';

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
