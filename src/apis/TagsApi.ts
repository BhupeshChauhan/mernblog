import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export const TagsApi = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/tags/${id}`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.TagData;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: '/tags',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.TagData;
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: '/tags/search',
      method: 'GET',
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.tags;
  },
  create: async function (post, cancel = false) {
    await api.request({
      url: `/tags`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  update: async function (category, cancel = false) {
    await api.request({
      url: `/tags/${category.id}`,
      method: 'PATCH',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  deactivate: async function (category, cancel = false) {
    const response = await api.request({
      url: `/tags/deactivate`,
      method: 'POST',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.categories;
  },
  activate: async function (category, cancel = false) {
    const response = await api.request({
      url: `/tags/activate`,
      method: 'POST',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.categories;
  },
};

// defining the cancel API object for TagsApi
const cancelApiObject = defineCancelApiObject(TagsApi);
