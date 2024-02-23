import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEditorContext } from '../../../../context/CreateEditorContext';
import AnimationWapper from '../../../../../../Common/PageAnimation';
import EditorTools from '../../../../../../Utils/editor.tools';

const EditorSection = ({ isEdit = false }) => {
  const {
    blog: { title,  content,  des, },
    setBlog,
    textEditor,
    setTextEditor,
  } = useEditorContext();

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const handleTitleChange = (event: any) => {
    let input: any = event.target;

    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';

    setBlog((prev: any) => ({ ...prev, title: input.value }));
  };

  const handleDescriptionChange = (event: any) => {
    let input: any = event.target;

    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';

    setBlog((prev: any) => ({ ...prev, des: input.value }));
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

  return (
    <AnimationWapper>
      <div className='mt-2'>
        <div>
          <textarea
            placeholder='Blog Title'
            className='text-2xl font-medium w-full h-8 outline-none resize-none leading-tight placeholder:opacity-40'
            value={title}
            onKeyDown={handleKeyDown}
            onChange={handleTitleChange}
          />
        </div>
        <div className='mt-2'>
          <textarea
            placeholder='Blog Description'
            className='text-md font-medium w-full h-8 outline-none resize-none leading-tight placeholder:opacity-40'
            value={des}
            onKeyDown={handleKeyDown}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <hr className='w-full opacity-50 my-2' />
      <div className='mt-2'>
        <div id='textEditor' className='font-gelasio' key={content} />
      </div>
    </AnimationWapper>
  );
};

export default EditorSection;
