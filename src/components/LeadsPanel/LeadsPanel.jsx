import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import Table from './Table';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: theme.spacing(2),
    width: '30em',
  },
  submit: {
    width: '20em',
    margin: theme.spacing(3, 0, 2),
    justifySelf: 'flex-start',
  },
  table: {
    flexDirection: 'row',
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default function LeadsPanel() {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <AppBar
          position="static"
          color="transparent"
          elevation="0"
          className={classes.appbar}
        >
          <img
            className={classes.logo}
            src={'logo.jpeg'}
            alt={'logo EloGroup'}
          ></img>
          <Typography variant="h4">Painel de Leads</Typography>
        </AppBar>
        <div>
          <Button
            type="submit"
            variant="outlined"
            className={classes.submit}
            onClick={() => {
              alert('clicked');
            }}
          >
            Novo Lead (+)
          </Button>
        </div>
        <div className={classes.table}>
          <Table />
        </div>
      </div>
    </Container>
  );
}
