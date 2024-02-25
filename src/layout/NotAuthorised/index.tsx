import { Typography } from '@mui/material';
import FullLayout from '../MainLayout';
import DashboardCard from '../../common/DashboardCard';

const NotAuthorised = () => {
  return (
    <FullLayout>
      <DashboardCard title='UnAuthorised Request'>
        <Typography>You Dont Have Required permission to access this resource.</Typography>
      </DashboardCard>
    </FullLayout>
  );
};

export default NotAuthorised;
