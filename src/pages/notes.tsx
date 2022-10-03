import { EmptyList } from 'components/EmptyList';
import { NotesCard } from 'components/NotesCard';
import { Entry } from 'interfaces/entry.interface';
import { Layout } from 'layout/layout';
import React, { useCallback, useEffect, useState } from 'react';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import Plus from 'assets/icons/plus.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import http from 'services/api';

export const Notes = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  let { id } = useParams();
  let { title } = useParams();

  const getEntries = useCallback(async () => {
    await http
      .get(`/journals/entries/${id}`)
      .then((res) => {
        setEntries(res.data?.entries);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  return (
    <Layout>
      <section className="entries">
        {entries.length > 0 && (
          <div className="entries__header">
            <Link to={'/journals'}>
              <img src={ArrowLeft} alt="Arrow left" />
              <p className="title-journal">{title}</p>
            </Link>
            <Link to={`/create-note/${title}/${id}`}>
              <button className="button button--outlined-brown">
                <img src={Plus} alt="Plus Icon" />
                Add note
              </button>
            </Link>
          </div>
        )}
        {entries.length ? (
          <div className="container-cards">
            {entries.map(({ id, title, content }) => (
              <NotesCard key={id} title={title} content={content} />
            ))}
          </div>
        ) : (
          <div className="entries__create-entrie">
            <>
              <p className="title-journal">{title}</p>
              <EmptyList
                cta="Create a note"
                to={`/create-note/${title}/${id}`}
              />
            </>
          </div>
        )}
      </section>
    </Layout>
  );
};
