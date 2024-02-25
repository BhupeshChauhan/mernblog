import { api } from '../../../utils/apiConfigs/axiosConfigs';

export const PostAPI = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/posts/${id}`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data.post;
  },
  getAll: async function (data: any,) {
    const response = await api.request({
      url: '/posts/',
      method: 'POST',
      data
    });

    return response.data;
  },
  getAllDraft: async function (data: any) {
    const response = await api.request({
      url: '/posts/draft',
      method: 'POST',
      data
    });

    return response.data;
  },
  search: async function (name: any) {
    const response = await api.request({
      url: '/posts/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.posts;
  },
  create: async function (post: any) {
    await api.request({
      url: `/posts/create`,
      method: 'POST',
      data: post,
    });
  },
  createDraft: async function (post: any) {
    await api.request({
      url: `/posts/draft`,
      method: 'POST',
      data: post,
    });
  },
  update: async function (post: any) {
    await api.request({
      url: `/posts/${post.id}`,
      method: 'PATCH',
      data: post,
    });
  },
  updateDraft: async function (post: any) {
    await api.request({
      url: `/posts/draft/${post.id}`,
      method: 'PATCH',
      data: post,
    });
  },
  deactivate: async function (post: any) {
    const response = await api.request({
      url: `/posts/deactivate`,
      method: 'POST',
      data: post,
    });

    return response.data.posts;
  },
  activate: async function (post: any) {
    const response = await api.request({
      url: `/posts/activate`,
      method: 'POST',
      data: post,
    });

    return response.data.posts;
  },
};
