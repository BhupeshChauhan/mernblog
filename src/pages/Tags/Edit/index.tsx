import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import tagsFormData from '../../../data/tagsFormData';

const TagsEdit = () => {
  const [isLoading, setisLoading] = useState(false);
  const [TagValues, setTagValues] = useState({});
  const { tagsFormArray, tagsInitialValues, tagsValidationSchema } =
    tagsFormData();

  const onAddUser = async (values: any) => {
    // const res: any = await apiCall(values);
    // if (res.status === 200) router.push("/tags/list");
  };

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
        title="Edit Tag"
        // subtitle="All listed Blogs"
        action={
          <Link to={"/tags/list"}>
            <Button variant="outlined">Tags List</Button>
          </Link>
        }
        formArray={tagsFormArray}
        initialValues={tagsInitialValues}
        onSubmit={onAddUser}
        isClear={true}
        validationSchema={tagsValidationSchema}
        isEdit={true}
        editValues={TagValues}
      />
    </div>
  );
};

export default TagsEdit;
