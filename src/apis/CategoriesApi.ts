import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export const CategoriesApi = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/categories/${id}`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.categories;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: '/categories',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.categories;
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: '/categories/search',
      method: 'GET',
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.categories;
  },
  create: async function (category, cancel = false) {
    await api.request({
      url: `/categories`,
      method: 'POST',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  update: async function (category, cancel = false) {
    await api.request({
      url: `/categories/${category.id}`,
      method: 'PATCH',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  deactivate: async function (category, cancel = false) {
    const response = await api.request({
      url: `/categories/deactivate`,
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
      url: `/categories/activate`,
      method: 'POST',
      data: category,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.categories;
  },
};

// defining the cancel API object for CategoriesApi
const cancelApiObject = defineCancelApiObject(CategoriesApi);
