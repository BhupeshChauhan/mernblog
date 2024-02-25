import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import EditorSection from './sections/EditorSection';
import { useEditorContext } from '../../context/CreateEditorContext';
import PublishSection from './sections/PublishSection';
import { Toaster, toast } from 'react-hot-toast';
import { PostAPI } from '../../apis/postApi';
import CustomCircularProgress from '../../../../components/CustomCircularProgress';

const CustomEditor = ({ isEdit = false, draft = false }) => {
  const [isLoading, setisLoading] = useState(false);
  const {
    blog: { title, banner, tags, categories, des, excerpt, visible, slug },
    blog,
    setBlog,
    textEditor,
    editorState,
    setEditorState,
  } = useEditorContext();

  const navigate = useNavigate();

  console.log(draft, isEdit)
  const handleSubmit = () => {
    if (editorState === 'editor') {
      if (!title.length) {
        return toast.error('Write blog title to proceed.');
      }
      if (!des.length) {
        return toast.error('Write blog description to proceed.');
      }
      if (textEditor.isReady) {
        textEditor
          .save()
          .then((data: any) => {
            if (data.blocks.length) {
              setBlog((prev: any) => ({ ...prev, content: data }));
              setEditorState('publish');
            } else {
              return toast.error('Write content in blog to proceed.');
            }
          })
          .catch((error: any) => {
            console.log(error);
          });
      }
    } else if (editorState === 'publish') {
      if (!banner.length) {
        return toast.error('Add blog banner to proceed.');
      }
      if (!tags.length) {
        return toast.error('Add blog tags to proceed.');
      }
      if (!categories.length) {
        return toast.error('Add blog categories to proceed.');
      }
      if (!excerpt.length) {
        return toast.error('Add blog excerpt to proceed.');
      }
      if (!visible.length) {
        return toast.error('Add blog visible to proceed.');
      }
      if (!slug.length) {
        return toast.error('Add blog slug to proceed.');
      }
      if (draft) {
        if (isEdit) {
          setisLoading(true);
          PostAPI.updateDraft(blog)
            .then(() => {
              // response handling
              navigate(`/draft/list`);
              setisLoading(false);
            })
            .catch((err) => {
              setisLoading(false);
              console.error(err);
            });
        } else {
          setisLoading(true);
          PostAPI.createDraft(blog)
            .then(() => {
              // response handling
              navigate(`/draft/list`);
              setisLoading(false);
            })
            .catch((err) => {
              setisLoading(false);
              console.error(err);
            });
        }
      } else {
        if (isEdit) {
          setisLoading(true);
          PostAPI.update(blog)
            .then(() => {
              // response handling
              navigate(`/posts/list`);
              setisLoading(false);
            })
            .catch((err) => {
              setisLoading(false);
              console.error(err);
            });
        } else {
          setisLoading(true);
          PostAPI.create(blog)
            .then(() => {
              // response handling
              navigate(`/posts/list`);
              setisLoading(false);
            })
            .catch((err) => {
              setisLoading(false);
              console.error(err);
            });
        }
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      setisLoading(true);
      const postbyid = async () =>
        await PostAPI.get(location.pathname.split('/')[3])
          .then((post) => {
            // response handling
            setBlog(post);
            setisLoading(false);
          })
          .catch((err) => {
            setisLoading(false);
            console.error(err);
          });
      postbyid();
    }
  }, []);

  return (
    <>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}
      <Grid container spacing={8} className='mx-auto w-full'>
        <Grid item xs={8}>
        {editorState === 'editor' ?(<div className='mb-4'>
        <Typography variant='h5' className='capitalize'>{editorState}</Typography>
      </div>): <></>}
        </Grid>
        <Grid item xs={4} className='flex items-center justify-end w-full'>
          <div className='mr-2'>
            {editorState === 'editor' ? (
              <Link to={'/posts/list'}>
                <Button
                  variant='outlined'
                  // disabled={!checkModulePermission(userData, moduleName.POST, moduleAction.ADD)}
                >
                  Blog List
                </Button>
              </Link>
            ) : (
              <Button variant='outlined' onClick={() => setEditorState('editor')}>
                Back
              </Button>
            )}
          </div>
          <div>
            <Button variant='contained' onClick={handleSubmit}>
              {editorState === 'editor' ? 'Next' : draft ? 'Save' : 'Publish'}
            </Button>
          </div>
        </Grid>
      </Grid>
      <Toaster />
      {isLoading ? (
        <CustomCircularProgress color='inherit' />
      ) : editorState === 'editor' ? (
        <EditorSection isEdit={isEdit} />
      ) : (
        <PublishSection />
      )}
    </>
  );
};

export default CustomEditor;
