import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

// Pages
import { Home } from 'pages/home';
import { Login } from 'pages/login';
import { Register } from 'pages/register';
import { Journals } from 'pages/journals';
import { PrivateRoutes } from './privateRoutes';
import { CreateJournal } from 'pages/create-journal';
import { Notes } from 'pages/notes';
import { CreateNote } from 'pages/create-note';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/journals" element={<Journals />} />
          <Route path="journals/:title/:id" element={<Notes />} />
          <Route path="/create-journal" element={<CreateJournal />} />
          <Route path="/create-note/:title/:id" element={<CreateNote />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
