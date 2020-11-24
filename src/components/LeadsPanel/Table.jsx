import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './DraggableCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
		width: 300,
		padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[
            'Cliente em Potencial',
            'Dados Confirmados',
            'Reunião Agendada',
          ].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <Typography variant="h6" component="h2">
                  {value}
                </Typography>
                <Card></Card>
                <Card></Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
