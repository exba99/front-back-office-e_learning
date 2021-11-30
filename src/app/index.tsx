/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { LoginPage } from './pages/LoginPage/Loadable';
import { DashboardPage } from './pages/DashboardPage/Loadable';
import history from 'utils/history';
import './assets/css/styles.css';

export function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = '/assets/js/jquery.min.js';
    scriptJQuery.async = true;
    document.body.appendChild(scriptJQuery);

    const scriptPopper = document.createElement('script');
    scriptPopper.src = '/assets/js/popper.min.js';
    scriptPopper.async = true;
    document.body.appendChild(scriptPopper);

    const scriptBootStrap = document.createElement('script');
    scriptBootStrap.src = '/assets/js/bootstrap.min.js';
    scriptBootStrap.async = true;
    document.body.appendChild(scriptBootStrap);

    const scriptSelect = document.createElement('script');
    scriptSelect.src = '/assets/js/select2.min.js';
    scriptSelect.async = true;
    document.body.appendChild(scriptSelect);

    const scriptSlick = document.createElement('script');
    scriptSlick.src = '/assets/js/slick.js';
    scriptSlick.async = true;
    document.body.appendChild(scriptSlick);

    const scriptMoment = document.createElement('script');
    scriptMoment.src = '/assets/js/moment.min.js';
    scriptMoment.async = true;
    document.body.appendChild(scriptMoment);

    const scriptDate = document.createElement('script');
    scriptDate.src = '/assets/js/daterangepicker.js';
    scriptDate.async = true;
    document.body.appendChild(scriptDate);

    const scriptSummer = document.createElement('script');
    scriptSummer.src = '/assets/js/summernote.min.js';
    scriptSummer.async = true;
    document.body.appendChild(scriptSummer);

    const scriptMetis = document.createElement('script');
    scriptMetis.src = '/assets/js/metisMenu.min.js';
    scriptMetis.async = true;
    document.body.appendChild(scriptMetis);

    const scriptCustomJs = document.createElement('script');
    scriptCustomJs.src = '/assets/js/custom.js';
    scriptCustomJs.async = true;
    document.body.appendChild(scriptCustomJs);

    return () => {
      document.body.removeChild(scriptJQuery);
      document.body.removeChild(scriptPopper);
      document.body.removeChild(scriptBootStrap);
      document.body.removeChild(scriptSelect);
      document.body.removeChild(scriptSlick);
      document.body.removeChild(scriptMoment);
      document.body.removeChild(scriptDate);
      document.body.removeChild(scriptSummer);
      document.body.removeChild(scriptMetis);
      document.body.removeChild(scriptCustomJs);
    };
  }, []);
  return (
    <Router history={history}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={LoginPage} />
        <DashboardPage />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
