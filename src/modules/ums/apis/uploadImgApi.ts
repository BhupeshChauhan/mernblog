import { api } from '../../../utils/apiConfigs/axiosConfigs';

export const UploadImgApi = {
  getImageUrl: async function () {
    const response = await api.request({
      url: `/get-upload-url`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data;
  },
  uploadImage: async function (formData: any) {
    const response = await api.request({
      url: `/upload-image`,
      method: 'POST',
      data: formData,
    });

    // returning the post returned by the API
    return response.data;
  },
  getImage: async function () {
    const response = await api.request({
      url: `/images`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data;
  },
};
