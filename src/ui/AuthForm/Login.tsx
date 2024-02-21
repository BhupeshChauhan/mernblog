import { Box, Stack, InputAdornment } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import { TbPasswordMobilePhone } from 'react-icons/tb';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../formComponent/FormFeilds/CustomTextField';
import { useGlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { UsersApi } from '../../apis/UsersApi';

interface loginType {
  type?: string;
}

const Login = ({ type }: loginType) => {
  const navigate = useNavigate();
  const { setUserData } = useGlobalContext();

  const handleSubmit = async (values: any) => {
    console.log(values);
    UsersApi.signIn(values)
      .then((user) => {
        // response handling
        navigate(`/dashboard`);
        setUserData(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(15, 'Password must be at least 15 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    }),
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className=' w-[80%] md:w-[55%] p-10 bg-white rounded-lg'>
      <Stack>
        <Box>
          <h1 className='text-4xl font-gelasio capitalize mt-10 mb-14 text-center'>
            {type === 'sign-in' ? 'Welcome Back' : 'Join Us Today'}
          </h1>
        </Box>
        <Box mt='25px'>
          <CustomTextField
            id='email'
            variant='outlined'
            name='email'
            placeholder='Email'
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MdEmail />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mt='25px'>
          <CustomTextField
            id='password'
            variant='outlined'
            name='password'
            placeholder='Password'
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <TbPasswordMobilePhone />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
      <Box>
        <button type='submit' className='btn-dark center mt-14'>
          {type ? type.replace('-', ' '): null}
        </button>
      </Box>
    </form>
  );
};

export default Login;
