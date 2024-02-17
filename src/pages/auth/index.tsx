import React, { useEffect } from 'react';
import AnimationWapper from '../../common/PageAnimation';
import Login from '../../ui/AuthForm/Login';
import { useGlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const UserAuth = ({ type }) => {
  const { userData, setUserData } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(Object.keys(userData).length > 0){
      navigate('/dashboard')
    }
  }, [])
  
  return (
    <AnimationWapper keyValue={type}>
      <section className='h-cover flex items-center justify-center'>
        <Login type={type} />
      </section>
    </AnimationWapper>
  );
};

export default UserAuth;
