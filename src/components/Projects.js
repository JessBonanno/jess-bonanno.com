import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PlaylistAddCheckTwoToneIcon from '@material-ui/icons/PlaylistAddCheckTwoTone';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';
import LaptopChromebookTwoToneIcon from '@material-ui/icons/LaptopChromebookTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginBottom: '20em',
    minHeight: '100vh',
    paddingBottom: '20em',
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
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : '5em',
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
      {/*----- ThirstyPlant -----*/}
      <Grid item>
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? 'center' : 'flex-end'}
          alignItems='center'
          className={classes.projectContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Thirsty Plant</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Never forget to water your plants again!
            </Typography>
            <Typography variant='subtitle1'>
              A water tracker for you plants
              {<br />}Allows users to monitor when their plants will need to be
              watered next
              {<br />}Tracks the last time a user watered a plant
              {<br />}Find my Plant identification feature to easily find the
              species of a plant.
            </Typography>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.projectButton}
              component={Link}
              to='/thirstyplant'
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
            <LocalDrinkIcon
              style={{ marginRight: matchesMD ? 0 : '.5em' }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Planner -----*/}
      <Grid item>
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? 'center' : undefined}
          alignItems='center'
          className={classes.projectContainer}
          style={{ marginLeft: matchesMD ? 0 : '5em' }}>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Planner App</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Get organized!
            </Typography>
            <Typography variant='subtitle1'>
              A to-do task manager
              {<br />}Gives users the ability to create and organize task lists
              into categories{<br />}Users can choose from a variety of themes
              for their dashboard for a personal feel
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
              style={{ marginRight: matchesMD ? 0 : '.5em' }}
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
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? 'center' : 'flex-end'}
          alignItems='center'
          className={classes.projectContainer}>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
            }}>
            <Typography variant='h4'>Isolation Recommendation</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Music during quarantine
            </Typography>
            <Typography variant='subtitle1'>
              A song suggester based on users musical interests {<br />}Users
              are reminded it's important to stay home during the pandemic{' '}
              {<br />} This application aims to provide entertainment to users
              while stuck inside
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
              style={{
                marginRight: matchesMD ? 0 : '.5em',
                marginTop: matchesMD && '.2em',
              }}
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
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? 'center' : undefined}
          alignItems='center'
          className={classes.projectContainer}
          style={{ marginLeft: matchesMD ? 0 : '5em' }}>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesMD ? undefined : '35em',
            }}>
            <Typography variant='h4'>Arc Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              A complete SPA
            </Typography>
            <Typography variant='subtitle1'>
              A marketing website for a software development company
              {<br />}Built to showcase and promote the company{<br />}
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
          <Grid item style={{ marginRight: matchesMD ? 0 : '5em' }}>
            <LaptopChromebookTwoToneIcon
              style={{
                marginRight: matchesMD ? 0 : '.5em',
                marginTop: matchesMD && '.1em',
              }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Trivia -----*/}
      <Grid item>
        <Grid
          container
          direction={matchesMD ? 'column' : 'row'}
          justify={matchesMD ? 'center' : 'flex-end'}
          alignItems='center'
          className={classes.projectContainer}
          style={{ marginTop: '1em' }}>
          <Grid
            item
            style={{
              textAlign: matchesMD ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Trivia Game</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Test your knowledge!
            </Typography>
            <Typography variant='subtitle1'>
              A trivia quiz game
              {<br />}Allows users to answer multiple choice trivia question
              {<br />}Multiple categories and difficulty levels to choose from
              {<br />}Complete with a leader board to see where you rank
            </Typography>
            <Button
              variant='outlined'
              color='secondary'
              className={classes.projectButton}
              component={Link}
              to='/trivia'
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
            <HelpTwoToneIcon
              style={{ marginRight: matchesMD ? 0 : '.5em' }}
              className={classes.icon}
              alt='checklist icon'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
