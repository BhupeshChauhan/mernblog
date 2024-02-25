import { api } from '../../../utils/apiConfigs/axiosConfigs';

export const RolesApi = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/roles/${id}`,
      method: 'GET',
    });

    // returning the post returned by the API
    return response.data.RoleData;
  },
  getList: async function () {
    const response = await api.request({
      url: '/roles',
      method: 'GET',
    });

    return response.data.data;
  },
  getAll: async function (data:any) {
    const response = await api.request({
      url: '/roles',
      method: 'POST',
      data
    });

    return response.data;
  },
  search: async function (name: any) {
    const response = await api.request({
      url: '/roles/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.RoleData;
  },
  create: async function (role: any) {
    await api.request({
      url: `/roles/create`,
      method: 'POST',
      data: role,
    });
  },
  update: async function (role: any) {
    await api.request({
      url: `/roles/${role.id}`,
      method: 'PATCH',
      data: role,
    });
  },
  deactivate: async function (role: any) {
    const response = await api.request({
      url: `/roles/deactivate`,
      method: 'POST',
      data: role,
    });

    return response.data.RoleData;
  },
  activate: async function (role: any) {
    const response = await api.request({
      url: `/roles/activate`,
      method: 'POST',
      data: role,
    });

    return response.data.RoleData;
  },
};
