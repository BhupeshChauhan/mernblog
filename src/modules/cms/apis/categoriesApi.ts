import { api } from '../../../utils/apiConfigs/axiosConfigs';

export const CategoriesApi = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/categories/${id}`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data.categories;
  },
  getList: async function () {
    const response = await api.request({
      url: '/categories',
      method: 'GET',
    });

    return response.data.data;
  },
  getAll: async function (data: any) {
    const response = await api.request({
      url: '/categories',
      method: 'POST',
      data
    });

    return response.data;
  },
  search: async function (name: any) {
    const response = await api.request({
      url: '/categories/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.categories;
  },
  create: async function (category: any) {
    await api.request({
      url: `/categories/create`,
      method: 'POST',
      data: category,
    });
  },
  update: async function (category: any) {
    await api.request({
      url: `/categories/${category.id}`,
      method: 'PATCH',
      data: category,
    });
  },
  deactivate: async function (category: any) {
    const response = await api.request({
      url: `/categories/deactivate`,
      method: 'POST',
      data: category,
    });

    return response.data.categories;
  },
  activate: async function (category: any) {
    const response = await api.request({
      url: `/categories/activate`,
      method: 'POST',
      data: category,
    });

    return response.data.categories;
  },
};

