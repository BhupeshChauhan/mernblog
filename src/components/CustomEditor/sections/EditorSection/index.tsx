import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import EditorTools from '../../../../utils/editor.tools';
import { Typography } from '@mui/material';
import { useEditorContext } from '../../../../context/CreateEditorContext';
import AnimationWapper from '../../../../common/PageAnimation';

const EditorSection = ({ isEdit = false }) => {
  let {
    blog: { title, banner, content, tags, categories, des, author },
    setBlog,
    textEditor,
    setTextEditor,
  } = useEditorContext();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const handleTitleChange = (event) => {
    let input = event.target;

    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';

    setBlog((prev) => ({ ...prev, title: input.value }));
  };

  const handleDescriptionChange = (event) => {
    let input = event.target;

    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';

    setBlog((prev) => ({ ...prev, des: input.value }));
  };

  useEffect(() => {
    if (isEdit) {
      if (!textEditor.isReady && content) {
        setTextEditor(
          new EditorJS({
            holderId: 'textEditor',
            placeholder: 'Write your storyboard!',
            tools: EditorTools,
            data: Array.isArray(content) ? content[0] : content,
          })
        );
      }
    } else {
      if (!textEditor.isReady) {
        setTextEditor(
          new EditorJS({
            holderId: 'textEditor',
            placeholder: 'Write your storyboard!',
            tools: EditorTools,
          })
        );
      }
    }
  }, [content]);

  console.log(content);
  return (
    <AnimationWapper>
      <div className='mb-4'>
        <Typography variant='h5'>Editor</Typography>
      </div>
      <div className='p-6'>
        <div className='mt-8'>
          <textarea
            placeholder='Blog Title'
            className='text-4xl font-medium w-full h-14 outline-none resize-none leading-tight placeholder:opacity-40'
            value={title}
            onKeyDown={handleKeyDown}
            onChange={handleTitleChange}
          />
        </div>
        <div className='mt-2'>
          <textarea
            placeholder='Blog Description'
            className='text-xl font-medium w-full h-10 outline-none resize-none leading-tight placeholder:opacity-40'
            value={des}
            onKeyDown={handleKeyDown}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <hr className='w-full opacity-50 my-5' />
      <div className='p-6'>
        <div id='textEditor' className='font-gelasio' />
      </div>
    </AnimationWapper>
  );
};

export default EditorSection;
