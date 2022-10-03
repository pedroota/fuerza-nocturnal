import { Layout } from 'layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Layout>
      <section className="home">
        <Link to="/login">
          <button className="button button--brown">Login</button>
        </Link>
        <Link to="/register">
          <button className="button button--brown">Register</button>
        </Link>
      </section>
    </Layout>
  );
};
