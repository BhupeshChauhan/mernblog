import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import usersFormData from '../../../data/usersFormData';
import { UsersApi } from '../../../apis/UsersApi';
import { RolesApi } from '../../../apis/RolesApi';

const UsersAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [RolesList, setRolesList] = useState([]);
  const { usersformArray, userInitialValues, userValidationSchema } = usersFormData(RolesList);

  const onAddUser = async (values: any) => {
    setIsLoading(true);
    await UsersApi.create(values)
      .then((tags) => {
        // response handling
        navigate(`/users/list`);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    RolesApi.getAll().then((categories) => {
      // response handling
      setRolesList(categories);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Create User'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/users/list'}>
            <Button variant='outlined'>Users List</Button>
          </Link>
        }
        formArray={usersformArray}
        initialValues={userInitialValues}
        onSubmit={onAddUser}
        isClear={true}
        validationSchema={userValidationSchema}
      />
    </div>
  );
};

export default UsersAdd;
