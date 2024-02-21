import { Toaster } from 'react-hot-toast';
import AnimationWapper from '../../../../common/PageAnimation';
import SettingsSection from '../SettingsSection';
import { Grid } from '@mui/material';
import PreivewSection from '../PreivewSection';

const PublishSection = () => {
  return (
    <AnimationWapper>
      <Grid container spacing={3}>
        <Grid item md={8} className='hidden md:block'>
          {/*  */}

          <div className='w-full bg-white p-6 rounded-md'>
            <PreivewSection />
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <SettingsSection />
        </Grid>
      </Grid>
      <Toaster />
    </AnimationWapper>
  );
};

export default PublishSection;
