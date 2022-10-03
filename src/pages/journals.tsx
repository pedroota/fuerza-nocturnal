import React, { useEffect, useCallback, useState } from 'react';
import { Layout } from 'layout/layout';
import { useAuth } from 'stores/auth';
import { Journal } from 'interfaces/journal.interface';
import http from 'services/api';
import { JournalCard } from 'components/JournalCard';
import { EmptyList } from 'components/EmptyList';

export const Journals = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const id = useAuth((state) => state.userId);

  const getJournals = useCallback(async () => {
    await http
      .get(`/journals/${id}`)
      .then((res) => {
        setJournals(res.data.journals);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <Layout isButtonActive={journals.length ? true : false}>
      <section className="journals">
        {journals.length ? (
          <div className="container-cards">
            {journals.map(({ id, title }) => (
              <JournalCard key={id} title={title} journalId={id} />
            ))}
          </div>
        ) : (
          <div className="journals__create-journal">
            <EmptyList cta="Create a journal" to="/create-journal" />
          </div>
        )}
      </section>
    </Layout>
  );
};
