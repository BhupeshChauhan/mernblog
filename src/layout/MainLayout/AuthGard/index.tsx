import React, { useEffect, useState } from 'react';
import NotAuthorised from '../../NotAuthorised';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthGard = ({ children }: any) => {
  const { userData, setUserData } = useGlobalContext();
  const [RoutePermission, setRoutePermission] = useState(true);
  let location: any = useLocation();
  const navigate = useNavigate();

  function checkModulePermissions(userData: any) {
    const path = location.pathname.split('/');
    if (path[1] && !path[2]) {
      const modulePermissions = userData.modulePermissions[path[1]];
      if (path[1] === 'dashboard') {
        const operationPermission = modulePermissions?.view;
        setRoutePermission(operationPermission);
      } else {
        setRoutePermission(false);
      }
    } else if (path[1] && path[2]) {
      const modulePermissions = userData.modulePermissions[path[1]];
      if (path[2] === 'list') {
        const operationPermission = modulePermissions?.view;
        setRoutePermission(operationPermission);
      } else {
        const operationPermission = modulePermissions[path[2]];
        setRoutePermission(operationPermission);
      }
    }
  }

  useEffect(() => {
    if (Object.values(userData)?.length > 0) {
      checkModulePermissions(userData);
    }
    if (Object.keys(userData).length === 0) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return <div>{RoutePermission ? children : <NotAuthorised />}</div>;
};

export default AuthGard;
