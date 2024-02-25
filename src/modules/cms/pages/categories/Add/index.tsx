import { useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../components/CustomCircularProgress';
import categoriesFormData from '../../../data/form/categoriesFormData';
import { CategoriesApi } from '../../../apis/categoriesApi';

const CategoriesAdd = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { categoriesformArray, categoriesInitialValues, categoriesValidationSchema } =
    categoriesFormData();
  const onAddcategories = async (values: any) => {
    setisLoading(true)
    CategoriesApi.create(values).then(() => {
      // response handling
      navigate(`/categories/list`);
      setisLoading(false);
    });
  };
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
      />
    </div>
  );
};

export default CategoriesAdd;
