import { CreateEditorContextProvider } from '../../../../cms/context/CreateEditorContext';
import CustomEditor from '../../../../cms/components/CustomEditor';
import DashboardCard from '../../../../../common/DashboardCard';

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
