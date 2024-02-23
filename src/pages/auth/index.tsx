import { useEffect } from 'react';
import AnimationWapper from '../../Common/PageAnimation';
import Login from '../../Ui/AuthForm/Login';
import { useGlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const UserAuth = ({ type }: any) => {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <AnimationWapper keyValue={type}>
      <section className='h-cover flex items-center justify-center'>
        <Login type={type} />
      </section>
    </AnimationWapper>
  );
};

export default UserAuth;
