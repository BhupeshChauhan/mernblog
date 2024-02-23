import { CreateEditorContextProvider } from '../../../../CMS/context/CreateEditorContext';
import CustomEditor from '../../../../CMS/components/CustomEditor';
import DashboardCard from '../../../../../Common/DashboardCard';

const PostAdd = () => {
  return (
    <CreateEditorContextProvider>
      <DashboardCard>
        <CustomEditor />
      </DashboardCard>
    </CreateEditorContextProvider>
  );
};

export default PostAdd;
