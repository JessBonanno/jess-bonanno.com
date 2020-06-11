import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PlaylistAddCheckTwoToneIcon from '@material-ui/icons/PlaylistAddCheckTwoTone';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';
import LaptopChromebookTwoToneIcon from '@material-ui/icons/LaptopChromebookTwoTone';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginBottom: '20em',
    minHeight: '100vh',
    marginTop: '4em',
    backgroundColor: theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      marginBottom: '10em',
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: '5em',
    },
  },
  heading: {
    fontSize: '2em',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginTop: '1em',
    },
  },
  projectButton: {
    ...theme.typography.projectButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    // marginLeft: '2em',
    color: theme.palette.common.yellow,
    fontSize: '8rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  projectContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: '1em',
    },
  },
}));

export default function Projects(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}>
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant='h2'
          className={classes.heading}
          gutterBottom>
          Projects
        </Typography>
      </Grid>
      {/*----- Planner -----*/}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.projectContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Planner App</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Get organized!
            </Typography>
            <Typography variant='subtitle1'>
              A to-do task manager I worked on for my first official school build
              week.
              {<br />}I stepped in to finish the backend after we lost a
              developer {<br />}
              Even though it was 2 units ahead of where I was in the curriculum
              I got it done
            </Typography>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.projectButton}
              component={Link}
              to='/planner'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}>
              <span style={{ marginRight: 10 }}>Check it out</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.yellow}
              />
            </Button>
          </Grid>
          <Grid item>
            <PlaylistAddCheckTwoToneIcon
              style={{ marginRight: matchesSM ? 0 : '.5em' }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Isolation -----*/}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.projectContainer}>
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}>
            <Typography variant='h4'>Isolation Recommendation</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Music during quarantine
            </Typography>
            <Typography variant='subtitle1'>
              I created this Landing page during the beginning of the 2020
              quarantine {<br />}My school had an optional build week and I'm
              glad I opted in {<br />} It was a great learning experience and
              helped when I had my first real build week
            </Typography>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.projectButton}
              component={Link}
              to='/isolation-recommendations'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}>
              <span style={{ marginRight: 10 }}>Check it out</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.yellow}
              />
            </Button>
          </Grid>
          <Grid item>
            <HeadsetTwoToneIcon
              style={{ marginRight: matchesSM ? 0 : '.5em' }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Arc -----*/}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.projectContainer}
          style={{ marginBottom: '10em' }}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Arc Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              A complete SPA
            </Typography>
            <Typography variant='subtitle1'>
              A website I built to sharpen my Material-UI skills
              {<br />}After I worked though this my confidence grew in my UX
              skills{<br />}I've used skills I learned from this project on a
              daily basis
            </Typography>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.projectButton}
              component={Link}
              to='/arc'
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}>
              <span style={{ marginRight: 10 }}>Check it out</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.yellow}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <LaptopChromebookTwoToneIcon
              style={{ marginRight: matchesSM ? 0 : '.5em' }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
