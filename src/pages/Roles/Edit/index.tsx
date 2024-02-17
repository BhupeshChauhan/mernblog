import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import rolesFormData from '../../../data/rolesFormData';

const RolesEdit = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [rolesValues, setRolesValues] = useState({});
  const { rolesFormArray, rolesInitialValues, rolesValidationSchema } =
    rolesFormData();

  const onAddUser = async (values: any) => {
    // const res: any = await apiCall(values);
    // if (res.status === 200) router.push("/roles/list");
  };

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDynamicForm
        title="Edit Role"
        // subtitle="All listed Blogs"
        action={
          <Link to={"/roles/list"}>
            <Button variant="outlined">Roles List</Button>
          </Link>
        }
        formArray={rolesFormArray}
        initialValues={rolesInitialValues}
        onSubmit={onAddUser}
        isClear={true}
        validationSchema={rolesValidationSchema}
        isEdit={true}
        editValues={rolesValues}
      />
    </div>
  );
};

export default RolesEdit;
