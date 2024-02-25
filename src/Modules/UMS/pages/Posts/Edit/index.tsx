import { CreateEditorContextProvider } from '../../../../CMS/context/CreateEditorContext';
import CustomEditor from '../../../../CMS/components/CustomEditor';
import DashboardCard from '../../../../../common/DashboardCard';

const PostEdit = () => {
  return (
    <CreateEditorContextProvider>
      <DashboardCard>
        <CustomEditor isEdit={true} />
      </DashboardCard>
    </CreateEditorContextProvider>
  );
};

export default PostEdit;
