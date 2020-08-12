import React, { Fragment } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './layout/Landing';
import Launch from './layout/Launch';
import Land from './layout/Land';

import CardRequest from './Components/CardRequest';

const useStyles = makeStyles({
  SpaceXContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              SpaceX
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path='/' component={CardRequest} />
        <Switch>
          <Route exact path='/landing/:id' component={Landing} />
          <Route exact path='/launch/:id' component={Launch} />
          <Route exact path='/land/:id' component={Land} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
