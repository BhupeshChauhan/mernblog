import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export const UploadImgApi = {
  getImageUrl: async function (cancel = false) {
    const response = await api.request({
      url: `/get-upload-url`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data;
  },
  uploadImage: async function (formData, cancel = false) {
    const response = await api.request({
      url: `/upload-image`,
      method: 'POST',
      data: formData,
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data;
  },
  getImage: async function (cancel = false) {
    const response = await api.request({
      url: `/images`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data;
  },
};

// defining the cancel API object for postAPI
const cancelApiObject = defineCancelApiObject(UploadImgApi);
