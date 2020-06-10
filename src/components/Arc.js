import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles as Arc, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link';

import arc from '../assets/images/arc.png';
import arcMobile from '../assets/images/arc-mobile.png';

const useStyles = Arc((theme) => ({
  arcContainer: {
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
    <Grid container direction='column' className={classes.arcContainer}>
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
              alt='back to isolation-recommendations'
              to='/isolation-recommendations'
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowBackIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography
              variant='h3'
              align={matchesMD ? 'center' : undefined}
              style={{ fontSize: matchesSM && '2.2rem' }}>
              Arc Development
            </Typography>
            <Grid item>
              <Link
                href='https://github.com/JessBonanno/Mui'
                color='secondary'
                rel='noopener noreferrer'
                target='_blank'>
                Github
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              My game changer.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              Building this app really taught me a lot about styling components
              and using the Material-UI library to make fully responsive SPAs.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I took a course aside from my regular studies because I felt there
              was so much I still didn't know about frontend styling with react.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              I was drawn to Material-UI from the minute I saw it and decided
              that this would be my library of choice for styling. I knew I
              would have to master this in order to give my applications a
              professional look.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={RouterLink}
              alt='forward to planner app'
              to='/planner'
              onClick={() => props.setSelectedIndex(2)}>
              <ArrowForwardIcon className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item>
            <img
              src={arcMobile}
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
            <img
              src={arc}
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
                src={arcMobile}
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
