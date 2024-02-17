import React from 'react';
import CustomBlogEditor from '../../../components/CustomBlogEditor';
import { Box, Button, Grid, Typography } from '@mui/material';
import CustomBlogSettings from '../../../components/CustomBlogSettings';
import AnimationWapper from '../../../common/PageAnimation';
import { Link } from 'react-router-dom';
import { CreateEditorContextProvider } from '../../../context/CreateEditorContext';

const PostAdd = () => {
  return (
    <div className='w-full bg-white p-6 rounded-md'>
      <CreateEditorContextProvider>
        <AnimationWapper>
          <Grid container spacing={8} className='mx-auto w-full'>
            <Grid item xs={8}>
              <Box className='mb-10'>
                <Typography variant='h2'>Add Post</Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                  {/* {subtitle} */}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} className='flex items-center justify-end w-full'>
              <div className='mr-2'>
                <Link to={'/posts/list'}>
                  <Button
                    variant='outlined'
                    // disabled={!checkModulePermission(userData, moduleName.POST, moduleAction.ADD)}
                  >
                    Blog List
                  </Button>
                </Link>
              </div>
              <div className='mr-2'>
                <Button variant='outlined'>Draft</Button>
              </div>
              <div>
                <Button variant='contained'>Publish</Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={8} className='mx-auto w-full'>
            <Grid item xs={8}>
              <CustomBlogEditor />
            </Grid>
            <Grid item xs={4}>
              <CustomBlogSettings />
            </Grid>
          </Grid>
        </AnimationWapper>
      </CreateEditorContextProvider>
    </div>
  );
};

export default PostAdd;
