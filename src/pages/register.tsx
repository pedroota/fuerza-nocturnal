import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Auth } from 'layout/auth';
import { useNavigate } from 'react-router-dom';
import http from 'services/api';
import { User } from 'interfaces/user.interface';

const validationRegister = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
  email: yup.string().email().notRequired(),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationRegister),
  });
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (user) => {
    await http
      .post<User>('/auth/signup', user)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        alert(err);
      });
  });

  return (
    <Auth title="Sign up" cta="Already have an account" link="/login">
      <form onSubmit={onSubmit}>
        <label className="label label--error">{errors.username?.message}</label>
        <input
          type="text"
          {...register('username')}
          placeholder="Define a username"
          className="input"
          aria-label="Input for your new username"
        />
        <label className="label label--error">{errors.password?.message}</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Your password"
          className="input"
          aria-label="Input for your new password"
        />
        <label className="label label--error">{errors.email?.message}</label>
        <input
          type="text"
          {...register('email')}
          placeholder="Email (optional)"
          className="input"
          aria-label="Optional input for your new email"
        />
        <button type="submit" className="button button--brown">
          Create account
        </button>
      </form>
    </Auth>
  );
};
