import React, { createContext, useContext, useState } from 'react';

const CreateEditorContext = createContext<any>(null);

const blogStructure = {
  title: '',
  banner: '',
  content: '',
  tags: [],
  categories: [],
  des: '',
  author: {
    personal_info: {},
  },
  excerpt: '',
  visible: '',
  slug: '',
};

export function CreateEditorContextProvider({ children }: any) {
  const [blog, setBlog] = React.useState(blogStructure);
  const [textEditor, setTextEditor] = React.useState({ isReady: false });
  const [editorState, setEditorState] = useState('editor');

  return (
    <CreateEditorContext.Provider
      value={{
        blog,
        setBlog,
        textEditor,
        setTextEditor,
        editorState,
        setEditorState,
      }}
    >
      {children}
    </CreateEditorContext.Provider>
  );
}

export function useEditorContext() {
  return useContext(CreateEditorContext);
}
