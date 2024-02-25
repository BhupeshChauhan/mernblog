import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../components/CustomCircularProgress';
import categoriesFormData from '../../../../CMS/data/form/categoriesFormData';
import { CategoriesApi } from '../../../../CMS/apis/CategoriesApi';

const CategoriesEdit = () => {
  const [isLoading, setisLoading] = useState(false);
  const [categoryValues, setCategoryValues] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { categoriesformArray, categoriesInitialValues, categoriesValidationSchema } =
    categoriesFormData();
  const onAddcategories = async (values: any) => {
    setisLoading(true);
    CategoriesApi.update(values).then(() => {
      // response handling
      navigate(`/categories/list`);
      setisLoading(false);
    });
  };

  useEffect(() => {
    setisLoading(true);
    CategoriesApi.get(location.pathname.split('/')[3])
      .then((categories) => {
        // response handling
        setCategoryValues(categories);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  }, []);
  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Create Category'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/categories/list'}>
            <Button variant='outlined'>categories List</Button>
          </Link>
        }
        formArray={categoriesformArray}
        initialValues={categoriesInitialValues}
        onSubmit={onAddcategories}
        validationSchema={categoriesValidationSchema}
        isClear={true}
        isEdit={true}
        editValues={categoryValues}
      />
    </div>
  );
};

export default CategoriesEdit;
