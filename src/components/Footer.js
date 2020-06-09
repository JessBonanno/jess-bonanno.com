import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from './ui/Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.slate,
    backgroundSize: 'cover',
    // ! zIndex and position set below to make the footer sit on top of the menu when its open
    zIndex: 1302,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  name: {
    ...theme.typography.tab,
    fontFamily: 'Shadows Into Light Two, cursive',
    fontSize: '2rem',
    color: theme.palette.common.paleGreen,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  mainContainer: {
    // position: 'absolute',
    backgroundColor: theme.palette.common.slate,
  },
  link: {
    color: theme.palette.secondary.main,
    fontFamily: 'Lexend Giga, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    textDecoration: 'none',
  },
  gridItem: {
    padding: '2em',
  },
  icon: {
    // height: '2em',
    // width: '2em',
    color: theme.palette.secondary.main,
    // [theme.breakpoints.down('xs')]: {
    //   height: '2.5em',
    //   width: '2.5em',
    // },
  },
  socialContainer: {
    backgroundColor: theme.palette.common.slate,
    marginBottom: '1em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <footer className={classes.footer}>
      <Grid item container direction='row' justify='center'>
        <Grid item className={classes.gridItem}>
          <Typography className={classes.name}>
            Jess Bonanno{' '}
            <span
              style={{
                fontFamily: 'Exo, sans-serif',
                fontSize: matchesSM ? '1rem' : '1.2rem',
                marginLeft: '1em',
              }}>
              a fullstack dev
            </span>
          </Typography>
        </Grid>

        <Hidden mdDown>
          <Grid
            item
            container
            justify='center'
            className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  component={Link}
                  onClick={() => props.setValue(0)}
                  to='/'
                  item
                  className={classes.link}>
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                  // to='/projects'
                  item
                  className={classes.link}>
                  Projects
                </Grid>
                <Grid
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                  // to='/planner'
                  item
                  className={classes.link}>
                  Planner App
                </Grid>
                <Grid
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                  }}
                  // to='/isolation-recommendations'
                  item
                  className={classes.link}>
                  Isolation Recommendations
                </Grid>
                <Grid
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                  // to='/arc'
                  item
                  className={classes.link}>
                  Arc Development
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  component={Link}
                  onClick={() => props.setValue(2)}
                  // to='/Resume'
                  item
                  className={classes.link}>
                  Resume
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  component={Link}
                  onClick={() => props.setValue(3)}
                  // to='/about'
                  item
                  className={classes.link}>
                  About Me
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  component={Link}
                  onClick={() => props.setValue(4)}
                  to='/contact'
                  item
                  className={classes.link}>
                  Contact
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <Grid
          container
          justify='center'
          alignItems='center'
          spacing={2}
          className={classes.socialContainer}>
          <Grid
            item
            component={'a'}
            href='github.com/JessBonanno'
            rel='noopener noreferrer'
            target='_blank'>
            <IconButton>
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <Grid
            item
            component={'a'}
            href='https://twitter.com/_JessBonanno'
            rel='noopener noreferrer'
            target='_blank'>
            <IconButton className={classes.icon}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
          </Grid>

          <Grid
            item
            component={'a'}
            href='https://www.linkedin.com/in/jessica-bonanno-1736a3195/'
            rel='noopener noreferrer'
            target='_blank'>
            <IconButton className={classes.icon}>
              <LinkedInIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
