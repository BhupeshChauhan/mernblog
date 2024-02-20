import React from 'react';
import { CreateEditorContextProvider } from '../../../context/CreateEditorContext';
import CustomEditor from '../../../components/CustomEditor';
import DashboardCard from '../../../components/shared/DashboardCard';

const PostAdd = () => {
  return (
      <CreateEditorContextProvider>
      <DashboardCard>
        <CustomEditor draft={true}/>
      </DashboardCard>
      </CreateEditorContextProvider>
  );
};

export default PostAdd;
