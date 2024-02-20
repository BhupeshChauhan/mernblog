import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import List from '@editorjs/list';
import Link from '@editorjs/link';
import InlineCode from '@editorjs/inline-code';
import Image from '@editorjs/image';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import { UploadImgApi } from '../apis/UploadImgApi';
import toast from 'react-hot-toast';
import axios from 'axios';
import EditorJs from '@editorjs/editorjs';

export const handleUploadImage = async (img) => {
  let imageUrl = null;
  if (img) {
    let loadingToast = toast.loading('Uploading...');
    await UploadImgApi.getImageUrl().then(async (data) => {
      const uploadUrl = data.uploadUrl;
      await axios({
        method: 'PUT',
        url: uploadUrl,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: img,
      })
        .then(async () => {
          if (uploadUrl) {
            await UploadImgApi.uploadImage({
              filename: img.name,
              contentType: img.type,
              size: img.size,
              imageUrl: uploadUrl?.split('?')[0],
              alt: img.name?.split('.')[0],
            }).then(() => {
              toast.dismiss(uploadUrl);
              toast.success('Image Uploaded Successfully');

              imageUrl = uploadUrl?.split('?')[0];
            });
          }
        })
        .catch((error) => {
          console.log('error: ' + error.message);
          toast.dismiss(uploadUrl);
          toast.error('Image Upload Failed');
        });
    });
  }
  return imageUrl;
};

const uploadImagebyURL = (e) => {
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (error) {
      reject(error);
    }
  });

  return link.then((url) => {
    return {
      success: 1,
      file: { url },
    };
  });
};

const handleUploadByFile = (e) => {
  return handleUploadImage(e).then((url: any) => {
    if (url) {
      return {
        success: 1,
        file: { url },
      };
    }
  });
};

const column_tools = {
  embed: Embed,
  link: Link,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImagebyURL,
        uploadByFile: handleUploadByFile,
      },
    },
  },
  list: {
    class: List,
    inlineToolBar: true,
  },
  marker: Marker,
  inlineCode: InlineCode,
  quote: {
    class: Quote,
    inlineToolBar: true,
  },
  header: {
    class: Header,
    config: {
      placeholder: 'Type Heading ...',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 3,
    },
  },
};

const EditorTools = {
  embed: Embed,
  link: Link,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImagebyURL,
        uploadByFile: handleUploadByFile,
      },
    },
  },
  list: {
    class: List,
    inlineToolBar: true,
  },
  marker: Marker,
  inlineCode: InlineCode,
  quote: {
    class: Quote,
    inlineToolBar: true,
  },
  header: {
    class: Header,
    config: {
      placeholder: 'Type Heading ...',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 3,
    },
  },
};

export default EditorTools;
