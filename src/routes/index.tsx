import { useRoutes } from 'react-router-dom';

// project import
import UnprotectedRoutes from './UnprotectedRoutes';
import ProtectedRoutes from './ProtectedRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([ProtectedRoutes, UnprotectedRoutes]);
}
