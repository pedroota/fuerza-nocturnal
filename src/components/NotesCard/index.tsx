import React from 'react';
import { INotesCard } from 'interfaces/notes-card.interface';

export const NotesCard = ({ title, content }: INotesCard) => {
  return (
    <article className="notes-card">
      <p>{title}</p>
      <p>{content}</p>
    </article>
  );
};
