import React from 'react';
import { Link } from 'react-router-dom';
import journalEmptyIlustration from 'assets/journal-empty.svg';
import { IEmptyList } from 'interfaces/empty-list.interface';

export const EmptyList = ({ cta, to }: IEmptyList) => {
  return (
    <>
      <img src={journalEmptyIlustration} alt="Person meditating" />
      <Link to={to} className="cta">
        {cta}
      </Link>
    </>
  );
};
