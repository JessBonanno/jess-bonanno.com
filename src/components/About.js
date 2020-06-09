import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import me from '../assets/images/me.jpg';
import jetski from '../assets/images/jetski.jpg';
import copper from '../assets/images/copper.jpg';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
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
  aboutTitle: {
    fontSize: '2em',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '1em',
    },
  },
  quote: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
    marginBottom: '5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  myPic: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column' className={classes.aboutContainer}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}>
        <Typography
          align={matchesMD ? 'center' : undefined}
          variant='h2'
          className={classes.aboutTitle}>
          About Me
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}>
        <Typography variant='h4' align='center' className={classes.quote}>
          “when you don't create things, you become defined by your tastes
          rather than ability. your tastes only narrow & exclude people. so
          create.” ― Why The Lucky Stiff
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction='column'
        className={classes.rowContainer}
        alignItems='center'
        style={{ marginBottom: '15em' }}>
        <Grid item>
          <Typography variant='h4' align='center'>
            Jess Bonanno
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            A fullstack dev
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt='founder' src={me} className={classes.myPic} />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I have always been passionate about all things tech & extremely
                driven to figure out how and why things work. I enjoy learning
                new things and putting them to use. I thrive on solving
                challenging problems. Working with technology suits me well as
                it is constantly evolving and there is always something new to
                master. I am skilled in HTML, CSS, Javascript, React.js,
                Express, Node.js, and SQL. I look forward to expanding this
                stack to meet the demands of any problems I work to solve in the
                future.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}>
            <Grid item>
              <img
                src={copper}
                alt='my chihuahua'
                style={{ maxWidth: matchesMD ? 300 : 300 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                my best bud Sammy at the beach
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I have always been passionate about all things tech & extremely
                driven to figure out how and why things work. I enjoy learning
                new things and putting them to use. I thrive on solving
                challenging problems. Working with technology suits me well as
                it is constantly evolving and there is always something new to
                master. I am skilled in HTML, CSS, Javascript, React.js,
                Express, Node.js, and SQL. I look forward to expanding this
                stack to meet the demands of any problems I work to solve in the
                future.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            alignItems={matchesMD ? 'center' : 'flex-end'}
            direction='column'
            lg>
            <Grid item>
              <img
                src={jetski}
                alt='jess on a jetski'
                style={{ maxWidth: matchesMD ? 300 : 300 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                fun day in Hilton Head SC
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
