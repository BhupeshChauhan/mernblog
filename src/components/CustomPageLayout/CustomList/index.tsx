import React from 'react';
import { Button } from '@mui/material';
import CustomDataGrid from '../../../components/CustomDataGrid';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import CustomModal from '../../CustomModal';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context/GlobalContext';
import checkModulePermission, {
  moduleAction,
  moduleName,
} from '../../../utils/checkModulePermission';

const CustomList = ({
  isLoading,
  pageTitle,
  pageSubTitle = '',
  addLink,
  addLinkTitle,
  data,
  columnsDef,
  DeleteMoadal,
  setDeleteMoadal,
  handleDelete,
  ActivateMoadal,
  setActivateMoadal,
  handleActivate,
  SelectedPost,
  setSelectedPost,
}) => {
  const { userData } = useGlobalContext();
  return (
    <>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDataGrid
        title={pageTitle}
        subtitle={pageSubTitle ? pageSubTitle : ''}
        action={
          <Link to={addLink}>
            <Button
              variant='outlined'
              // disabled={!checkModulePermission(userData, moduleName.POST, moduleAction.ADD)}
            >
              {addLinkTitle}
            </Button>
          </Link>
        }
        columns={columnsDef}
        rows={data}
        pageSize={10}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
      />
      <CustomModal
        open={DeleteMoadal}
        title={`Do you want to Deactivate ${SelectedPost?.name} post?`}
        content={'Note: If you deactivate this post then it will not be visible anymore'}
        handleClose={() => {
          setDeleteMoadal(false);
          setSelectedPost({});
        }}
        onOk={handleDelete}
        onCancel={() => {
          setDeleteMoadal(false);
          setSelectedPost({});
        }}
      />
      <CustomModal
        open={ActivateMoadal}
        title={`Do you want to activate ${SelectedPost?.name} post?`}
        content={'Note: If you activate this post then it will become visible automatically'}
        handleClose={() => {
          setActivateMoadal(false);
          setSelectedPost({});
        }}
        onOk={handleActivate}
        onCancel={() => {
          setActivateMoadal(false);
          setSelectedPost({});
        }}
      />
    </>
  );
};

export default CustomList;
