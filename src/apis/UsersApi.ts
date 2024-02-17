import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const UsersApi = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/auth/:id`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    // returning the post returned by the API
    return response.data.UserData
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/auth",
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.UserData
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: "/auth/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.auth
  },
  create: async function (post, cancel = false) {
    await api.request({
      url: `/auth`,
      method: "POST",
      data: post,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
  },
  signIn: async function (post, cancel = false) {
    const response = await api.request({
      url: `/auth/login`,
      method: "POST",
      data: post,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
    
    return response.data.user
  },
}

// defining the cancel API object for UsersApi
const cancelApiObject = defineCancelApiObject(UsersApi)