import { Link } from 'react-router-dom';
import logo from '../../../../assets/imgs/dfaxlogo.png'

const Logo = () => {
  return (
    <Link to='/' className='flex justify-center items-center w-28 my-4'>
      <img src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;
