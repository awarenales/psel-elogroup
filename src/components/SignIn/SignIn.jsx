import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import { submit } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  logo: {
    margin: theme.spacing(2, 0, 4),
    width: '90%',
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function SignIn({ formValues = {}, formErrors = {}, onClick }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <img
          className={classes.logo}
          src={'logo.jpeg'}
          alt={'logo EloGroup'}
        ></img>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Usuário"
            name="email"
            autoComplete="email"
            autoFocus
            error={!!formErrors.user}
            helperText={formErrors.user}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirmar senha"
            type="password"
            id="confirm-password"
            autoComplete="current-password"
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            onClick={onClick}
          >
            Registrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default connect(null, {
  onClick: () => {
    submit({});
  },
})(SignIn);
