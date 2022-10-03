import { Auth } from 'layout/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from 'stores/auth';
import { useNavigate } from 'react-router-dom';
import http from 'services/api';

const validationLogin = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLogin),
  });
  const setUser = useAuth((state) => state.updateUser);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (user) => {
    await http
      .post('https://fuerza.test/auth/login', user)
      .then((res) => {
        setUser(res.data.user.id, res.data.token);
        navigate('/journals');
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Auth title="Sign in" cta="Sign up" link="/register">
      <form onSubmit={onSubmit}>
        <label className="label label--error">{errors.username?.message}</label>
        <input
          type="text"
          {...register('username')}
          placeholder="Your username"
          className="input"
          aria-label="Input for your current username"
        />
        <label className="label label--error">{errors.password?.message}</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Your password"
          className="input"
          aria-label="Input for your current password"
        />
        <button type="submit" className="button button--brown">
          Log in
        </button>
      </form>
    </Auth>
  );
};
