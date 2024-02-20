import React from 'react';
import { CreateEditorContextProvider } from '../../../context/CreateEditorContext';
import CustomEditor from '../../../components/CustomEditor';
import DashboardCard from '../../../components/shared/DashboardCard';

const PostEdit = () => {

  return (
      <CreateEditorContextProvider>
      <DashboardCard>
        <CustomEditor isEdit={true} draft={true}/>
      </DashboardCard>
      </CreateEditorContextProvider>
  );
};

export default PostEdit;