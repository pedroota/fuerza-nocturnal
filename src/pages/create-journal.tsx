import { CreateJournalIlustration } from 'components/CreateJournalIlustration';
import { Layout } from 'layout/layout';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import http from 'services/api';
import { useAuth } from 'stores/auth';
import { IFormCreateJournal } from 'interfaces/create-journal.interface';

export const CreateJournal = () => {
  const [journalTitle, setJournalTitle] = useState('');
  const userId = useAuth((state) => state.userId);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormCreateJournal>();

  const onSubmit = handleSubmit(async (label) => {
    const title = label.text;
    await http
      .post(`/journals`, { title, userId })
      .then(() => navigate('/journals'))
      .catch((err) => console.log(err));
  });

  return (
    <Layout>
      <section className="create-journal">
        <CreateJournalIlustration title={journalTitle} />
        <form onSubmit={onSubmit}>
          <input
            {...register('text')}
            type="text"
            className="input"
            placeholder="Title journal"
            onChange={(event) => setJournalTitle(event.target.value)}
            aria-label="Input for title of your journal"
          />
          <button type="submit" className="button button--brown">
            Save journal
          </button>
        </form>
      </section>
    </Layout>
  );
};
