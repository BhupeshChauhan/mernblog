import CustomList from '../../../../../components/CustomPageLayout/CustomList';
import { CategoriesApi } from '../../../../CMS/apis/CategoriesApi';
import CategoriesListColumns from '../../../../CMS/data/list/categoriesListColumns';

const Categories = () => {
  
  return (
    <CustomList
      addLink={'/categories/add'}
      addLinkTitle={'Add Categories'}
      columnsDef={(setActivateMoadal: any, setSelected: any, setDeleteMoadal: any) => CategoriesListColumns(setActivateMoadal, setSelected, setDeleteMoadal)}
      deleteAPI={(payload: any) => CategoriesApi.deactivate(payload)}
      activateAPI={(payload: any) => CategoriesApi.activate(payload)}
      getAPI={(payload: any) => CategoriesApi.getAll(payload)}
    />
  );
};

export default Categories;
