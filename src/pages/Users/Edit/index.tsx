import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import usersFormData from '../../../data/usersFormData';

const UsersEdit = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [RolesList, setRolesList] = useState([]);
  const { usersformArray, userInitialValues, userValidationSchema } =
    usersFormData(RolesList);

  const onAddUser = async (values: any) => {
    // const res: any = await apiCall(values);
    // if (res.status === 200) router.push("/users/list");
  };

  const [userValues, setUserValues] = useState({});
  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color="inherit" /> : <></>}
      <CustomDynamicForm
        title="Create User"
        // subtitle="All listed Blogs"
        action={
          <Link to={"/users/list"}>
            <Button variant="outlined">Users List</Button>
          </Link>
        }
        formArray={usersformArray}
        initialValues={userInitialValues}
        onSubmit={onAddUser}
        isClear={true}
        validationSchema={userValidationSchema}
        isEdit={true}
        editValues={userValues}
      />
    </div>
  );
};

export default UsersEdit;
