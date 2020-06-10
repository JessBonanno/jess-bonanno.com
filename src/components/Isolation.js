import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import isolation from '../assets/images/isolation.png';
import isolationMobile from '../assets/images/isolation-mobile.png';

const useStyles = makeStyles((theme) => ({
  isolationContainer: {
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

export default function Isolation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column' className={classes.isolationContainer}>
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
              component={Link}
              alt='back to planner app'
              //   to="/isolation"
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowBackIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h3' align={matchesMD ? 'center' : undefined} style={{fontSize: matchesSM && '2.2rem'}}>
              Isolation Recommendations
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              My first "real" project.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              This was a landing page I was tasked with making for a mini optional build week.  It was my first time building something without guidance.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I was a bit nervous going into it but once I started coding I found a rhythm & lost track of the hours.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I was proud by the end of this project to see how far I had really come.  It was gratifying to look back at all I had learned and see it really come together.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              alt='forward arc development'
              //   to="/isolation"
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowForwardIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item>
            <img
              src={isolationMobile}
              alt='mobile isolation'
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
            >
            <img
              src={isolation}
              alt='desktop isolation-recommendations'
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
                src={isolationMobile}
                alt='mobile isolation-recommendations'
                style={{ maxHeight: matchesXS ? 200 : 400 }}
              />
            </Grid>
          </Grid>{' '}
        </Hidden>{' '}
      </Grid>{' '}
    </Grid>
  );
}
