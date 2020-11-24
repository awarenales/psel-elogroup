import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
		minWidth: 200,
		marginTop: theme.spacing(2),
		background: grey[200],
  },
}));

export default function LeadsPanel() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          Lead
        </Typography>
      </CardContent>
    </Card>
  );
}
