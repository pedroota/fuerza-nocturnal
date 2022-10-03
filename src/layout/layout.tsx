import React from 'react';
import nocturnalLogo from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import Plus from 'assets/icons/plus.svg';
import { ILayoutProps } from 'interfaces/layout.interface';

export const Layout = ({ children, isButtonActive = false }: ILayoutProps) => {
  return (
    <section className="layout">
      <div className="layout__header">
        <img src={nocturnalLogo} alt="Nocturnal Logo" />
        {isButtonActive && (
          <Link to="/create-journal">
            <button className="button button--outlined-brown">
              <img src={Plus} alt="Plus Icon" />
              Add Journal
            </button>
          </Link>
        )}
      </div>
      <div className="layout__body">{children}</div>
    </section>
  );
};
