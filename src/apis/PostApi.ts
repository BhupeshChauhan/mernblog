import { api } from './configs/axiosConfigs';

export const PostAPI = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/posts/${id}`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data.post;
  },
  getAll: async function () {
    const response = await api.request({
      url: '/posts/',
      method: 'GET',
    });

    return response.data.posts;
  },
  getAllDraft: async function () {
    const response = await api.request({
      url: '/posts/draft',
      method: 'GET',
    });

    return response.data.posts;
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
      url: `/posts`,
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
