import React from 'react';
import { Layout } from 'layout/layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';
import http from 'services/api';

export const CreateNote = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { title } = useParams();
  let navigate = useNavigate();

  const onSubmit = handleSubmit(async (note) => {
    await http
      .post(`/journals/entry/${id}`, note)
      .then(() => {
        navigate(`/journals/${title}/${id}`);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Layout>
      <section className="create-note">
        <Link to={`/journals/${title}/${id}`}>
          <div className="create-note__header">
            <img src={ArrowLeft} alt="Arrow left" />
            <p className="title-journal">{title}</p>
          </div>
        </Link>
        <form onSubmit={onSubmit}>
          <input
            {...register('title')}
            type="text"
            className="input"
            placeholder="Title"
            aria-label="Input title of your note"
          />
          <textarea
            {...register('content')}
            className="textarea"
            placeholder="Write your note"
            aria-label="Input title of your content note"
          />
          <button type="submit" className="button button--brown">
            Save note
          </button>
        </form>
      </section>
    </Layout>
  );
};
