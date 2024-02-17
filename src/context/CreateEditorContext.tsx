import React, { createContext, useContext, useEffect, useState } from 'react';

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
};

export function CreateEditorContextProvider({ children }: any) {
  const [blog, setBlog] = React.useState(blogStructure);
  const [textEditor, setTextEditor] = React.useState({ isReady: false });

  return (
    <CreateEditorContext.Provider
      value={{
        blog, setBlog, textEditor, setTextEditor
      }}
    >
      {children}
    </CreateEditorContext.Provider>
  );
}

export function useEditorContext() {
  return useContext(CreateEditorContext);
}
