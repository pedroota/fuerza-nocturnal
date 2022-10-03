import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IJournalCard } from 'interfaces/journal-card.interface';

export const JournalCard = ({ title, journalId }: IJournalCard) => {
  let navigate = useNavigate();

  const navigateToNotes = () => {
    return navigate(`/journals/${title}/${journalId}`);
  };

  return (
    <div className="journal-card" onClick={navigateToNotes}>
      <p className="title-journal">{title}</p>
    </div>
  );
};
