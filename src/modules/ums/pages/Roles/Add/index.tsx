import { useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../components/CustomCircularProgress';
import rolesFormData from '../../../../ums/data/form/rolesFormData';
import { RolesApi } from '../../../../ums/apis/RolesApi';

const RolesAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { rolesFormArray, rolesInitialValues, rolesValidationSchema } = rolesFormData();

  const onAddRole = async (values: any) => {
    setIsLoading(true);
    RolesApi.create(values)
      .then(() => {
        // response handling
        navigate(`/roles/list`);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Failed to create', err);
        setIsLoading(false);
      });
  };

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Create Roles'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/roles/list'}>
            <Button variant='outlined'>Roles List</Button>
          </Link>
        }
        formArray={rolesFormArray}
        initialValues={rolesInitialValues}
        onSubmit={onAddRole}
        isClear={true}
        validationSchema={rolesValidationSchema}
      />
    </div>
  );
};

export default RolesAdd;
