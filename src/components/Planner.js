import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link';

import planner from '../assets/images/planner.png';
import plannerThemes from '../assets/images/planner-themes.png';
import plannerMobile from '../assets/images/planner-mobile.png';

const useStyles = makeStyles((theme) => ({
  plannerContainer: {
    margin: '4em 0 20em',
    backgroundColor: theme.palette.common.black,
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'center',
      minHeight: 800,
      marginBottom: '10em',
    },
  },

  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  arrow: {
    color: theme.palette.common.yellow,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  showcaseContainer: {
    margin: '5em 0',
    [theme.breakpoints.down('md')]: {
      margin: '3em 0',
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1em 1em',
      width: '100%',
    },
  },
}));

export default function Planner(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column' className={classes.plannerContainer}>
      {/* title block */}
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : 'space-between'}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={RouterLink}
              alt='back to arc development'
              to='/arc'
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowBackIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h3' align={matchesMD ? 'center' : undefined}>
              Planner App
            </Typography>
            <Link
              href='https://github.com/Wunderlist-1'
              color='secondary'
              rel='noopener noreferrer'
              target='_blank'>
              Github
            </Link>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              This app was a lot of fun to make.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I went into this build week as an intro to React student. I was
              tasked with creating forms for the app as well as getting data
              from an API and displaying it.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I went above and beyond what was asked and built out an entire
              user interface using React and Material-UI. I also added a feature
              that allows users to chose a theme for their dashboard.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              When the end of build week was almost upon us we lost our backend
              developer. I put in a lot of work at that point and I wanted the
              app to have functionality so I tackled finishing up the backend
              and was successful.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={RouterLink}
              alt='forward isolation recommendations'
              to='/isolation-recommendations'
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowForwardIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item>
            <img
              src={plannerMobile}
              alt='mobile planner'
              style={{ maxHeight: matchesSM ? 200 : 400 }}
            />
          </Grid>
        </Hidden>{' '}
      </Grid>
      {/* shwocase block */}
      <Grid item container alignItems='center' justify='space-between'>
        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          className={classes.showcaseContainer}
          justify='center'
          alignItems='center'
          md>
          <Grid item style={{ margin: '2em' }}>
            <img
              src={planner}
              alt='desktop planner'
              style={{ maxWidth: matchesSM ? '100%' : 700 }}
            />
          </Grid>
          <Grid item style={{ margin: '2em' }}>
            <img
              src={plannerThemes}
              alt='planner themes'
              style={{ maxWidth: matchesSM ? '100%' : 700 }}
            />
          </Grid>
        </Grid>
        <Hidden lgUp>
          <Grid
            item
            container
            justify='center'
            alignItems='center'
            style={{ margin: '2em' }}
            md>
            <Grid item>
              <img
                src={plannerMobile}
                alt='mobile planner'
                style={{ maxHeight: matchesXS ? 200 : 400 }}
              />
            </Grid>
          </Grid>{' '}
        </Hidden>{' '}
      </Grid>{' '}
    </Grid>
  );
}
