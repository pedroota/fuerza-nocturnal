import React from 'react';
import nocturnalLogo from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import { IAuthLayoutProps } from 'interfaces/auth-layout.interface';

export const Auth = ({ children, title, cta, link }: IAuthLayoutProps) => {
  return (
    <section className="layout-auth">
      <div className="layout-auth__container">
        <img src={nocturnalLogo} alt="Nocturnal Logo" />
        <div className="layout-auth__header">
          <p className="layout-auth__title">{title}</p>
          <Link className="layout-auth__link" to={link}>
            {cta}
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};
