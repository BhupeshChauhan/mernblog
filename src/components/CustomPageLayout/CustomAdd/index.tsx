import { Button } from '@mui/material';
import CustomCircularProgress from '../../CustomCircularProgress';
import CustomDynamicForm from '../../CustomDynamicForm';
import { Link } from 'react-router-dom';
const CustomAdd = ({
  isLoading,
  pageTitle,
  pageSubTitle,
  listLink,
  listLinkTitle,
  formArray,
  initialValues,
  onSubmit,
  validationSchema,
  AddintionalFooterActions,
  AddintionalFooterComponent,
}: any) => {
  if (AddintionalFooterActions) {
    return (
      <>
        {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
        <CustomDynamicForm
          title={pageTitle}
          subtitle={pageSubTitle ? pageSubTitle : ''}
          action={
            <Link to={listLink}>
              <Button variant='outlined'>{listLinkTitle}</Button>
            </Link>
          }
          formArray={formArray}
          initialValues={initialValues}
          onSubmit={onSubmit}
          isClear={true}
          validationSchema={validationSchema}
          hideSubmit={true}
          AddintionalFooterActions={() => ({ AddintionalFooterComponent })}
        />
      </>
    );
  }
  return (
    <>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <CustomDynamicForm
        title={pageTitle}
        subtitle={pageSubTitle ? pageSubTitle : ''}
        action={
          <Link to={listLink}>
            <Button variant='outlined'>{listLinkTitle}</Button>
          </Link>
        }
        formArray={formArray}
        initialValues={initialValues}
        onSubmit={onSubmit}
        isClear={true}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default CustomAdd;
