import { api } from './configs/axiosConfigs';

export const TagsApi = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/tags/${id}`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data.TagData;
  },
  getAll: async function () {
    const response = await api.request({
      url: '/tags',
      method: 'GET',
    });

    return response.data.TagData;
  },
  search: async function (name: any) {
    const response = await api.request({
      url: '/tags/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.tags;
  },
  create: async function (tag: any) {
    await api.request({
      url: `/tags`,
      method: 'POST',
      data: tag,
    });
  },
  update: async function (tag: any) {
    await api.request({
      url: `/tags/${tag.id}`,
      method: 'PATCH',
      data: tag,
    });
  },
  deactivate: async function (tag: any) {
    const response = await api.request({
      url: `/tags/deactivate`,
      method: 'POST',
      data: tag,
    });

    return response.data.categories;
  },
  activate: async function (tag: any) {
    const response = await api.request({
      url: `/tags/activate`,
      method: 'POST',
      data: tag,
    });

    return response.data.categories;
  },
};
