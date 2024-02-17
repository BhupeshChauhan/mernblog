import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import categoriesFormData from '../../../data/categoriesFormData';

const CategoriesEdit = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    categoriesformArray,
    categoriesInitialValues,
    categoriesValidationSchema,
  } = categoriesFormData();
  const onAddcategories = async (values: any) => {
    // const res = await apiCall(values);
    // if (res.status === 200) {
    //   router.push("/categories/list");
    // }
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

export default CategoriesEdit;
