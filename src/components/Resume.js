import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import resume from '../assets/images/Resume.jpg';

const useStyles = makeStyles((theme) => ({
  resumeContainer: {
    margin: '4em 0 15em',
    backgroundColor: theme.palette.common.black,
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'center',
      minHeight: 800,
      marginBottom: '7em',
    },
  },
  resumeItem: {
    margin: '2em 0 15em',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      margin: '2em 0',
    },

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '-3em',
    },
  },
  resumeImg: {
    width: '95%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      margin: '2em 0',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  resumePaper: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  resumeLink: {
    margin: '3em 0 3em',
    fontSize: '1.5em',
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2em',
      marginTop: '7em',
    },
  },
}));

export default function Resume() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container className={classes.resumeContainer} justify='center'>
      <Grid item className={classes.resumeItem} align='center'>
        <Grid item className={classes.resumeLink}>
          <Link
            style={{ fontFamily: 'Lexend Giga, sans-serif' }}
            href='https://docs.google.com/document/d/1cyUOxqR2nS66zWMthlm-MTF0pX7Iub5-mI33sInXvLo/edit?usp=sharing'
            color='secondary'>
            View Document
          </Link>
        </Grid>
        <Paper className={classes.resumePaper} elevation={10}>
          <img src={resume} alt='resume' className={classes.resumeImg} />
        </Paper>
      </Grid>
    </Grid>
  );
}
