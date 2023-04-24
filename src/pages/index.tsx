import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import { HomePage } from './home-page';
import { NotFoundPage } from './not-found-page';

export const Routing: Component = () => {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Routes>
  );
};
