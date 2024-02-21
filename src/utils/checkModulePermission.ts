export const moduleAction = {
  ADD: 'add',
  EDIT: 'edit',
  ACTIVATE: 'activate',
  DEACTIVATE: 'deactivate',
  VIEW: 'view',
  PUBLISH: 'publish',
  DRAFT: 'draft',
};

export const moduleName = {
  DASHBOARD: 'dashboard',
  POST: 'posts',
  CATEGORIES: 'categories',
  IMAGES: 'images',
  USERS: 'users',
  ROLES: 'roles',
  TAGS: 'tags',
  DRAFT: 'draft',
  CLIENTUSERS: 'clientUser',
};

const checkModulePermission = (userData: any, moduleNames: any, moduleActions: any) => {
  if (moduleName && moduleAction) {
    const modulePermissions = userData.modulePermissions?.[moduleNames];
    const operationPermission = modulePermissions?.[moduleActions];
    return operationPermission;
  }
  return false;
};

export default checkModulePermission;

export const checkPermissionDelete = (userData: any, params: any, moduleNames: any): boolean => {
  let disable = false;
  if (params.row.inActive) {
    disable = !checkModulePermission(userData, moduleNames, moduleAction.ACTIVATE);
  } else if (!params.row.inActive) {
    disable = !checkModulePermission(userData, moduleNames, moduleAction.DEACTIVATE);
  }
  return disable;
};
