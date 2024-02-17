import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import categoriesFormData from '../../../data/categoriesFormData';
import { CategoriesApi } from '../../../apis/CategoriesApi';

const CategoriesAdd = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const {
    categoriesformArray,
    categoriesInitialValues,
    categoriesValidationSchema,
  } = categoriesFormData();
  const onAddcategories = async (values: any) => {
    CategoriesApi.create(values).then((categories) => {
      // response handling
      navigate(`/categories/list`)
    })
  };
  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDynamicForm
        title="Create Category"
        // subtitle="All listed Blogs"
        action={
          <Link to={"/categories/list"}>
            <Button variant="outlined">categories List</Button>
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
