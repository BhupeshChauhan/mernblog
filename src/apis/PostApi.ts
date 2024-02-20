import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export const PostAPI = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/posts/${id}`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.post;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: '/posts/',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  getAllDraft: async function (cancel = false) {
    const response = await api.request({
      url: '/posts/draft',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: '/posts/search',
      method: 'GET',
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  create: async function (post, cancel = false) {
    await api.request({
      url: `/posts`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  createDraft: async function (post, cancel = false) {
    await api.request({
      url: `/posts/draft`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  update: async function (post, cancel = false) {
    await api.request({
      url: `/posts/${post.id}`,
      method: 'PATCH',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  updateDraft: async function (post, cancel = false) {
    await api.request({
      url: `/posts/draft/${post.id}`,
      method: 'PATCH',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  deactivate: async function (post, cancel = false) {
    const response = await api.request({
      url: `/posts/deactivate`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
  activate: async function (post, cancel = false) {
    const response = await api.request({
      url: `/posts/activate`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.posts;
  },
};

// defining the cancel API object for postAPI
const cancelApiObject = defineCancelApiObject(PostAPI);
