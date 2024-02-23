import { useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../../../Components/CustomDynamicForm';
import CustomCircularProgress from '../../../../../Components/CustomCircularProgress';
import tagsFormData from '../../../../CMS/data/form/tagsFormData';
import { TagsApi } from '../../../../CMS/apis/TagsApi';

const TagsAdd = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { tagsFormArray, tagsInitialValues, tagsValidationSchema } = tagsFormData();

  const onAddtags = async (values: any) => {
    setisLoading(true);
    TagsApi.create(values).then(() => {
      // response handling
      navigate(`/tags/list`);
      setisLoading(false);
    });
  };

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Tags Posts'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/tags/list'}>
            <Button variant='outlined'>Tags List</Button>
          </Link>
        }
        formArray={tagsFormArray}
        initialValues={tagsInitialValues}
        onSubmit={onAddtags}
        validationSchema={tagsValidationSchema}
        isClear={true}
      />
    </div>
  );
};

export default TagsAdd;
