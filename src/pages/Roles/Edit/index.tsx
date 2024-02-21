import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import rolesFormData from '../../../data/rolesFormData';
import { RolesApi } from '../../../apis/RolesApi';

const RolesEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rolesValues, setRolesValues] = useState({});
  const navigate = useNavigate();
  const { rolesFormArray, rolesInitialValues, rolesValidationSchema } = rolesFormData();

  const onEditRole = async (values: any) => {
    setIsLoading(true);
    RolesApi.update(values)
      .then(() => {
        // response handling
        navigate(`/roles/list`);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    RolesApi.get(location.pathname.split('/')[3])
      .then((tags) => {
        // response handling
        setRolesValues(tags);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Edit Role'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/roles/list'}>
            <Button variant='outlined'>Roles List</Button>
          </Link>
        }
        formArray={rolesFormArray}
        initialValues={rolesInitialValues}
        onSubmit={onEditRole}
        isClear={true}
        validationSchema={rolesValidationSchema}
        isEdit={true}
        editValues={rolesValues}
      />
    </div>
  );
};

export default RolesEdit;
