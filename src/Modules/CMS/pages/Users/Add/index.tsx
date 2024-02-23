import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../Components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../Components/CustomCircularProgress';
import usersFormData from '../../../../UMS/data/form/usersFormData';
import { UsersApi } from '../../../../UMS/apis/UsersApi';
import { RolesApi } from '../../../../UMS/apis/RolesApi';

const UsersAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [RolesList, setRolesList] = useState([]);
  const { usersformArray, userInitialValues, userValidationSchema } = usersFormData(RolesList);

  const onAddUser = async (values: any) => {
    setIsLoading(true);
    await UsersApi.create(values)
      .then(() => {
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
    RolesApi.getList().then((categories) => {
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
