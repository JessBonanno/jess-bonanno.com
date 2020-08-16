import React, {useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';

import planner from '../assets/images/planner.png';
import plannerThemes from '../assets/images/planner-themes.png';
import plannerMobile from '../assets/images/planner-mobile.png';
import plannerMac from '../assets/images/planner-mac.png';
import plannerMacTheme from '../assets/images/planner-mac-theme.png';

const useStyles = makeStyles(theme => ({
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
        margin: '2em 0 6em',
        [theme.breakpoints.down('md')]: {
            margin: '3em 0',
            width: '80%',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '1em 1em',
            width: '100%',
        },
    },
    listText: {
        fontSize: '1rem',
    },
    links: {
        margin: theme.spacing(1),
    },

}));

export default function Planner(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Grid container direction='column' className={classes.plannerContainer}>
            {/* title block */}
            <Grid
                item
                container
                direction='row'
                justify={matchesMD ? 'center' : 'space-between'}
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? '1em' : '2em'}}>
                <Hidden mdDown>
                    <Grid
                        item
                        className={classes.arrowContainer}
                        style={{marginRight: '1em', marginLeft: '-3.5em'}}>
                        <IconButton
                            style={{backgroundColor: 'transparent'}}
                            component={RouterLink}
                            alt='back to thirsty plant'
                            to='/thirstyplant'
                            onClick={() => props.setSelectedIndex(2)}>
                            <ArrowBackIcon className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction='column' className={classes.heading}>
                    <Grid
                        item
                        container
                        alignItems={matchesMD ? 'center' : 'center'}
                        direction={matchesMD ? 'column' : 'row'}>
                        <Typography variant='h4' align={matchesMD ? 'center' : undefined}>
                            Planner App
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        direction='column'
                        alignItems={matchesMD ? 'center' : 'flex-start'}>
                        <Typography variant='h6'>Stack Used</Typography>

                        <Typography
                            variant='body2'
                            align='center'
                            className={classes.stack}
                            style={{
                                color: theme.palette.common.yellow,
                                fontSize: '1em',
                                margin: '1em 0 0',
                            }}>
                            React | Javascript | Material-UI | SQL | Node | Express | Git
                        </Typography>
                    </Grid>
                    <Grid item className={classes.links}>

                        <Link
                            style={{marginLeft: matchesMD ? 0 : '1em', margin: theme.spacing(1)}}
                            href='https://github.com/Wunderlist-1'
                            color='secondary'
                            rel='noopener noreferrer'
                            target='_blank'>
                            View Repo
                        </Link>
                        <Link
                            style={{marginLeft: matchesMD ? 0 : '1em'}}
                            href='https://naughty-albattani-bf5571.netlify.app/'
                            color='secondary'
                            rel='noopener noreferrer'
                            target='_blank'>
                            Visit Page
                        </Link>

                    </Grid>

                    {/*<Grid*/}
                    {/*    item*/}
                    {/*    container*/}
                    {/*    justify={matchesMD ? 'center' : 'flex-start'}*/}
                    {/*    style={{margin: '1em 0 2em'}}>*/}
                    {/*    <Grid item>*/}
                    {/*        <Grid item>*/}
                                {/*            <List dense style={{ padding: 0 }}>*/}
                                {/*              <ListItem disableGutters>*/}
                                {/*                <ListItemIcon>*/}
                                {/*                  <DoneAllTwoToneIcon*/}
                                {/*                    style={{*/}
                                {/*                      fontSize: '1rem',*/}
                                {/*                      marginBottom: '.3em',*/}
                                {/*                      width: 50,*/}
                                {/*                      color: theme.palette.common.yellow,*/}
                                {/*                    }}*/}
                                {/*                  />*/}
                                {/*                </ListItemIcon>*/}
                                {/*                <ListItemText*/}
                                {/*                  classes={{ primary: classes.listText }}*/}
                                {/*                  primary='Built a fully responsive user interface using React and Material-UI.*/}
                                {/*'*/}
                                {/*                />*/}
                                {/*              </ListItem>*/}
                                {/*            </List>*/}
                                {/*          </Grid>*/}

                                {/*          <Grid item>*/}
                                {/*            <List dense style={{ padding: 0 }}>*/}
                                {/*              <ListItem disableGutters>*/}
                                {/*                <ListItemIcon>*/}
                                {/*                  <DoneAllTwoToneIcon*/}
                                {/*                    style={{*/}
                                {/*                      fontSize: '1rem',*/}
                                {/*                      marginBottom: '.3em',*/}
                                {/*                      width: 50,*/}
                                {/*                      color: theme.palette.common.yellow,*/}
                                {/*                    }}*/}
                                {/*                  />*/}
                                {/*                </ListItemIcon>*/}
                                {/*                <ListItemText*/}
                                {/*                  classes={{ primary: classes.listText }}*/}
                                {/*                  primary='Developed backend REST API with Node Express and SQL.'*/}
                                {/*                />*/}
                                {/*              </ListItem>*/}
                                {/*            </List>*/}
                                {/*          </Grid>*/}
                                {/*          <Grid item>*/}
                                {/*            <List dense style={{ padding: 0 }}>*/}
                                {/*              <ListItem disableGutters>*/}
                                {/*                <ListItemIcon>*/}
                                {/*                  <DoneAllTwoToneIcon*/}
                                {/*                    style={{*/}
                                {/*                      fontSize: '1rem',*/}
                                {/*                      marginBottom: '.3em',*/}
                                {/*                      width: 50,*/}
                                {/*                      color: theme.palette.common.yellow,*/}
                                {/*                    }}*/}
                                {/*                  />*/}
                                {/*                </ListItemIcon>*/}
                                {/*                <ListItemText*/}
                                {/*                  classes={{ primary: classes.listText }}*/}
                                {/*                  primary='Implemented an extra feature allowing  user themes.'*/}
                                {/*                />*/}
                                {/*              </ListItem>*/}
                                {/*            </List>*/}
                                {/*          </Grid>*/}
                                {/*          <Grid item>*/}
                                {/*            <List dense style={{ padding: 0 }}>*/}
                                {/*              <ListItem disableGutters>*/}
                                {/*                <ListItemIcon>*/}
                                {/*                  <DoneAllTwoToneIcon*/}
                                {/*                    style={{*/}
                                {/*                      fontSize: '1rem',*/}
                                {/*                      marginBottom: '.3em',*/}
                                {/*                      width: 50,*/}
                                {/*                      color: theme.palette.common.yellow,*/}
                                {/*                    }}*/}
                                {/*                  />*/}
                                {/*                </ListItemIcon>*/}
                                {/*                <ListItemText*/}
                                {/*                  classes={{ primary: classes.listText }}*/}
                                {/*                  primary='Worked effectively on a team of developers.'*/}
                                {/*                />*/}
                                {/*              </ListItem>*/}
                                {/*            </List>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>{' '}*/}
                    {/*</Grid>*/}
                    {/* <Grid item> */}
                    {/* <Typography
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
              user interface using React and Material-UI. I also added an extra
              feature that allows users to choose a theme for their dashboard
              for better user experience.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              The biggest obstacle I had to overcome was when the end of build
              week was almost upon us and we lost our backend developer. I
              tackled finishing up the backend with only 2 days left. I was able
              to build out a data structure to handle the adding of user to-do
              lists by creating the tables to store the data with Knex as well
              as implementing the REST API endpoints with response and error
              handling.
            </Typography> */}
                    {/* </Grid> */}
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: 'transparent'}}
                            component={RouterLink}
                            alt='forward isolation recommendations'
                            to='/isolation-recommendations'
                            onClick={() => props.setSelectedIndex(2)}>
                            <ArrowForwardIcon className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Grid item>
                        <img
                            src={plannerMobile}
                            alt='mobile planner'
                            style={{maxHeight: matchesSM ? 200 : 400}}
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
                    <Grid item style={{margin: '2em'}}>
                        <img
                            src={plannerMac}
                            alt='desktop planner'
                            style={{maxWidth: matchesSM ? '100%' : 700}}
                        />
                    </Grid>
                    <Grid item style={{margin: '2em'}}>
                        <img
                            src={plannerMacTheme}
                            alt='planner themes'
                            style={{maxWidth: matchesSM ? '100%' : 700}}
                        />
                    </Grid>
                </Grid>
                <Hidden lgUp>
                    <Grid
                        item
                        container
                        justify='center'
                        alignItems='center'
                        style={{margin: '2em'}}
                        md>
                        <Grid item>
                            <img
                                src={plannerMobile}
                                alt='mobile planner'
                                style={{
                                    maxHeight: matchesXS ? 200 : 400,
                                    marginBottom: matchesSM && '7em',
                                }}
                            />
                        </Grid>
                    </Grid>{' '}
                </Hidden>{' '}
            </Grid>{' '}
        </Grid>
    );
}
