// components/PrivateRoute.js
import {  useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }: any) => {
  const navigate = useNavigate();
  const isAuthenticated = /* Check your authentication state here */ true;

  if (!isAuthenticated) {
    navigate('/login'); // Redirect to the login page if not authenticated
    return null; // Render nothing
  }

  return element;
};

export default PrivateRoute;
