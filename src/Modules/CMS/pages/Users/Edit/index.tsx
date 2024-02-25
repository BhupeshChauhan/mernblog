import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../components/CustomCircularProgress';
import usersFormData from '../../../../ums/data/form/usersFormData';
import { UsersApi } from '../../../../ums/apis/UsersApi';
import { RolesApi } from '../../../../ums/apis/RolesApi';

const UsersEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [RolesList, setRolesList] = useState([]);
  const navigate = useNavigate();
  const { usersformArrayEdit, userInitialValuesEdit, userValidationSchemaEdit } =
    usersFormData(RolesList);

  const [userValues, setUserValues] = useState({});

  const onEditUser = async (values: any) => {
    setIsLoading(true);
    UsersApi.update(values)
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

  console.log(userValues);

  const getInitData = async () => {
    setIsLoading(true);
    await RolesApi.getList().then((user) => {
      // response handling
      setRolesList(user);
      setIsLoading(false);
    });

    await UsersApi.get(location.pathname.split('/')[3])
      .then((user) => {
        // response handling
        setUserValues(user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getInitData();
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
        formArray={usersformArrayEdit}
        initialValues={userInitialValuesEdit}
        onSubmit={onEditUser}
        isClear={true}
        validationSchema={userValidationSchemaEdit}
        isEdit={true}
        editValues={userValues}
      />
    </div>
  );
};

export default UsersEdit;
