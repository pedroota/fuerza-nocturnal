import React from 'react';
import { ICreateJournalIlustration } from 'interfaces/create-journal-ilustration.interface';

export const CreateJournalIlustration = ({
  title,
}: ICreateJournalIlustration) => {
  return (
    <div className="create-journal-ilustration">
      <p className="title-journal">{title}</p>
    </div>
  );
};
