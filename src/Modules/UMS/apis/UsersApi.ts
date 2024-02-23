import { api } from "../../../Utils/apiConfigs/axiosConfigs";


export const UsersApi = {
  get: async function (id: any) {
    const response = await api.request({
      url: `/auth/${id}`,
      method: 'GET',
    });

    const UserData = {
      id: response.data.UserData.id,
      profilePicture: response.data.UserData.personal_info?.profile_img,
      name: response.data.UserData.personal_info?.fullname,
      email: response.data.UserData.personal_info?.email,
      password: response.data.UserData.personal_info?.password,
      role: response.data.UserData?.role.name,
      bio: response.data.UserData.personal_info?.bio,
    };
    // returning the post returned by the API
    return UserData;
  },
  getAll: async function (data: any) {
    const response = await api.request({
      url: '/auth',
      method: 'POST',
      data
    });

    return response.data;
  },
  getAllClient: async function (data: any) {
    const response = await api.request({
      url: '/auth/client',
      method: 'POST',
      data
    });

    return response.data;
  },
  search: async function (name: any) {
    const response = await api.request({
      url: '/auth/search',
      method: 'GET',
      params: {
        name: name,
      },
    });

    return response.data.auth;
  },
  create: async function (user: any) {
    await api.request({
      url: `/auth/create`,
      method: 'POST',
      data: user,
    });
  },
  signIn: async function (user: any) {
    const response = await api.request({
      url: `/auth/login`,
      method: 'POST',
      data: user,
    });

    return response.data.user;
  },
  update: async function (user: any) {
    await api.request({
      url: `/auth/${user.id}`,
      method: 'PATCH',
      data: user,
    });
  },
  deactivate: async function (user: any) {
    const response = await api.request({
      url: `/auth/deactivate`,
      method: 'POST',
      data: user,
    });

    return response.data.UserData;
  },
  activate: async function (user: any) {
    const response = await api.request({
      url: `/auth/activate`,
      method: 'POST',
      data: user,
    });

    return response.data.UserData;
  },
};
