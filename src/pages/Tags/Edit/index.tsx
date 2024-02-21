import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomDynamicForm from '../../../components/CustomDynamicForm';
import CustomCircularProgress from '../../../components/CustomCircularProgress';
import tagsFormData from '../../../data/tagsFormData';
import { TagsApi } from '../../../apis/TagsApi';

const TagsEdit = () => {
  const [isLoading, setisLoading] = useState(false);
  const [TagValues, setTagValues] = useState({});
  const navigate = useNavigate();
  const { tagsFormArray, tagsInitialValues, tagsValidationSchema } = tagsFormData();

  const onEditTag = async (values: any) => {
    setisLoading(true);
    TagsApi.update(values)
      .then(() => {
        // response handling
        navigate(`/tags/list`);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  };
  useEffect(() => {
    setisLoading(true);
    TagsApi.get(location.pathname.split('/')[3])
      .then((tags) => {
        // response handling
        setTagValues(tags);
        setisLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setisLoading(false);
      });
  }, []);

  return (
    <div className='w-full bg-white p-6 rounded-md'>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title='Edit Tag'
        // subtitle="All listed Blogs"
        action={
          <Link to={'/tags/list'}>
            <Button variant='outlined'>Tags List</Button>
          </Link>
        }
        formArray={tagsFormArray}
        initialValues={tagsInitialValues}
        onSubmit={onEditTag}
        isClear={true}
        validationSchema={tagsValidationSchema}
        isEdit={true}
        editValues={TagValues}
      />
    </div>
  );
};

export default TagsEdit;
