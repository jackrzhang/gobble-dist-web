import { checkAuth } from './../lib/auth-utils';

// NOTE: Landing page does not utilize Redux
import React from 'react';
import ReactDOM from 'react-dom/server';

import Landing from './../../common/landing/Landing';
const landingRoot = ReactDOM.renderToString(
  <Landing />
);

import UserApp from './../../common/user-app/UserApp';
const userAppRoot = ReactDOM.renderToString(
  <UserApp />
);

const routeLanding = (app) => {
  app.get('/', (req, res) => {
    if (checkAuth(req)) {
      res.status(200).render('user-app', {
        root: userAppRoot
      });
    } else {
      res.status(200).render('landing', {
        root: landingRoot
      });
    }
  });
};

export default routeLanding;
