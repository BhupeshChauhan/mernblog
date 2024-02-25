import { useState } from "react";

const useListView = ({ deleteAPI, activateAPI, getAPI }: any) => {
  const [isLoading, setisLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 0,
    pagelength: 0,
    pageSize: 10
  });
  const [filters, setFilters] = useState<any>({
    query: null
  });
  const [deleteMoadal, setDeleteMoadal] = useState(false);
  const [selected, setSelected] = useState<any>({});
  const [activateMoadal, setActivateMoadal] = useState(false);
  const [data, setData] = useState([]);

  const handleDelete = () => {
    setisLoading(true);
    deleteAPI(selected).then((categories: any) => {
      // response handling
      setData(categories);
      setisLoading(false);
    })
    setDeleteMoadal(false);
    setSelected({});
    setisLoading(false);
  };

  const handleActivate = () => {
    setisLoading(true);
    activateAPI(selected)
    setActivateMoadal(false);
    setSelected({});
    setisLoading(false);
  };

  const handleFilterChange = (e: any) => {
    setFilters((prev: any) => ({...prev, query: e.target.value}))
  }
  const handleSearch = (e: any) => {
    if (e.keyCode === 13) {
    setisLoading(true);
    getAPI({ maxLimit: pagination.pageSize, page: pagination.page + 1, query: filters.query }).then((posts: any) => {
      // response handling
      setData(posts.data);
      setPagination({
        page: posts.pagination.page - 1,
        pagelength: posts.pagination.pagelength,
        pageSize: posts.pagination.pageSize,
      })
    });
    setActivateMoadal(false);
    setSelected({});
    setisLoading(false);
  }
  };

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,) => {
    setisLoading(true);
    getAPI({ maxLimit: pagination.pageSize, page: newPage, query: filters.query }).then((posts: any) => {
      // response handling
      setData(posts.data);
      setPagination({
        page: posts.pagination.page - 1,
        pagelength: posts.pagination.pagelength,
        pageSize: posts.pagination.pageSize,
      })
    });
    setActivateMoadal(false);
    setSelected({});
    setisLoading(false);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    setisLoading(true);
    getAPI({ maxLimit: parseInt(event.target.value, 10), page: 1, query: filters.query }).then((posts: any) => {
      // response handling
      setData(posts.data);
      setPagination({
        page: posts.pagination.page - 1,
        pagelength: posts.pagination.pagelength,
        pageSize: posts.pagination.pageSize,
      })
    });
    setActivateMoadal(false);
    setSelected({});
    setisLoading(false);
  };

  const handleGetInitialData = (init: any) => {
    setisLoading(true);
    getAPI(init).then((posts: any) => {
      // response handling
      setData(posts.data);
      setPagination({
        page: posts.pagination.page - 1,
        pagelength: posts.pagination.pagelength,
        pageSize: posts.pagination.pageSize,
      })
    });
    setActivateMoadal(false);
    setSelected({});
    setisLoading(false);
  };


  const handleBlur = (e: any) => {
    let query = e.target.value;
    if (!(query.length > 0)) {
      // router.push(`/`, { scroll: false });
    }
  };

  return {
    isLoading, 
    deleteMoadal, 
    setDeleteMoadal, 
    setisLoading, 
    selected, 
    setSelected, 
    activateMoadal, 
    setActivateMoadal, 
    data, 
    setData, 
    handleActivate, 
    handleDelete, 
    handleSearch,
    pagination, 
    setPagination,
    handleGetInitialData,
    filters, setFilters,
    handleFilterChange,
    handleChangeRowsPerPage,
    handleChangePage,
    handleBlur
  }
}

export default useListView