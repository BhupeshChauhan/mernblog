import { Button } from '@mui/material';
import CustomDataGrid from '../../CustomDataGrid';
import CustomModal from '../../CustomModal';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useEffect } from 'react';
import useListView from '../../../hooks/useListView';
import checkModulePermission, { moduleAction, moduleName } from '../../../utils/checkModulePermission';

const CustomList = ({
  addLink,
  addLinkTitle,
  deleteAPI,
  activateAPI,
  getAPI,
  columnsDef
}: any) => {
  const { userData } = useGlobalContext();
  const {
    isLoading,
    deleteMoadal,
    selected,
    activateMoadal,
    data,
    filters,
    pagination,
    setDeleteMoadal,
    setSelected,
    setActivateMoadal,
    handleActivate,
    handleDelete,
    handleSearch,
    handleChangeRowsPerPage,
    handleChangePage,
    handleGetInitialData,
    handleFilterChange,
    handleBlur
  } = useListView(
    { 
      deleteAPI: (payload: any) => deleteAPI(payload), 
      activateAPI: (payload: any) => activateAPI(payload), 
      getAPI: (payload: any) => getAPI(payload)
    })

    const column = columnsDef(setActivateMoadal, setSelected, setDeleteMoadal)
  useEffect(() => {
    handleGetInitialData({ maxLimit: 10, page: 1, query: null })
  }, []);
  return (
    <>
      <CustomDataGrid
        title={<input
          type="text"
          placeholder="Search"
          value={filters.query}
          onChange={handleFilterChange}
          className="w-full md:w-auto text-sm bg-grey p-2 md:pr-1 rounded-full placeholder:text-dark-grey md:pl-6 placeholder:text-sm"
          onKeyDown={handleSearch}
          onBlur={handleBlur}
        />}
        isloading={isLoading}
        action={
          <Link to={addLink}>
            <Button
              variant='outlined'
              disabled={!checkModulePermission(userData, moduleName.POST, moduleAction.ADD)}
            >
              {addLinkTitle}
            </Button>
          </Link>
        }
        columns={column}
        rows={data}
        pagelength={pagination.pagelength}
        disableRowSelectionOnClick={true}
        disableColumnSelector={true}
        page={pagination.page}
  handleChangePage={handleChangePage}
  rowsPerPage={pagination.pageSize}
  handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <CustomModal
        open={deleteMoadal}
        title={`Do you want to Deactivate ${selected?.name} post?`}
        content={'Note: If you deactivate this post then it will not be visible anymore'}
        handleClose={() => {
          setDeleteMoadal(false);
          setSelected({});
        }}
        onOk={handleDelete}
        onCancel={() => {
          setDeleteMoadal(false);
          setSelected({});
        }}
      />
      <CustomModal
        open={activateMoadal}
        title={`Do you want to activate ${selected?.name} post?`}
        content={'Note: If you activate this post then it will become visible automatically'}
        handleClose={() => {
          setActivateMoadal(false);
          setSelected({});
        }}
        onOk={handleActivate}
        onCancel={() => {
          setActivateMoadal(false);
          setSelected({});
        }}
      />
    </>
  );
};

export default CustomList;
