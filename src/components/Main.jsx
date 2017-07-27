import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import apiClient from 'panoptes-client/lib/api-client';
import AboutLayout from './about';
import ZooHeader from './ZooHeader';
import ZooFooter from './ZooFooter';
import Home from '../components/Home';
import AdminContainer from '../containers/AdminContainer';
import AdminLayoutIndicator from '../components/AdminLayoutIndicator';
import AuthContainer from '../containers/AuthContainer';
import { ZooniverseLogo } from 'zooniverse-react-components';

export default function Main() {
  const mainHeaderNavList = [
    <NavLink className="site-header__link--small" to="/about">About</NavLink>
  ];

  const logoHomeLink =
    (<NavLink className="site-header__link" to='/'>
      <ZooniverseLogo height="1.25em" width="1.25em" />
    </NavLink>);

  return (
    <App centered={false} className="app-layout" inline={true}>
      {!!apiClient.params.admin &&
        <AdminLayoutIndicator />}
      <Box>
        <ZooHeader mainHeaderNavList={mainHeaderNavList} authContainer={<AuthContainer />} logoHomeLink={logoHomeLink} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutLayout} />
        </Switch>
        <ZooFooter adminContainer={<AdminContainer />} />
      </Box>
    </App>
  );
}

