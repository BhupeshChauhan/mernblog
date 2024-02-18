import { api } from './configs/axiosConfigs';
import { defineCancelApiObject } from './configs/axiosUtils';

export const RolesApi = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/roles/${id}`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the post returned by the API
    return response.data.RoleData;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: '/roles',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.RoleData;
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: '/roles/search',
      method: 'GET',
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.RoleData;
  },
  create: async function (post, cancel = false) {
    await api.request({
      url: `/roles`,
      method: 'POST',
      data: post,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  update: async function (role, cancel = false) {
    await api.request({
      url: `/roles/${role.id}`,
      method: 'PATCH',
      data: role,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
  deactivate: async function (role, cancel = false) {
    const response = await api.request({
      url: `/roles/deactivate`,
      method: 'POST',
      data: role,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.RoleData;
  },
  activate: async function (role, cancel = false) {
    const response = await api.request({
      url: `/roles/activate`,
      method: 'POST',
      data: role,
      signal: cancel
        ? cancelApiObject[this.create.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.RoleData;
  },
};

// defining the cancel API object for RolesApi
const cancelApiObject = defineCancelApiObject(RolesApi);
