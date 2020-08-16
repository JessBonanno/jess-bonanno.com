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

export default function Isolation(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Grid container direction='column' className={classes.isolationContainer}>
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
                            alt='back to planner app'
                            to='/planner'
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
                        <Typography
                            variant='h4'
                            align={matchesMD ? 'center' : undefined}
                            style={{fontSize: matchesSM && '2.2rem'}}>
                            Isolation Recommendations
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
                            React | Javascript | Material-UI
                        </Typography>
                    </Grid>
                    <Grid item className={classes.links}>

                        <Link
                            style={{marginLeft: matchesMD ? 0 : '1em', margin: theme.spacing(1)}}
                            href='https://github.com/JessBonanno/isolation-recommendations'
                            color='secondary'
                            rel='noopener noreferrer'
                            target='_blank'>
                            View Repo
                        </Link>
                        <Link
                            style={{marginLeft: matchesMD ? 0 : '1em'}}
                            href='http://isolation-recommendations.herokuapp.com/'
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
                        {/*<Grid item>*/}
                        {/*    <Grid item>*/}
                        {/*                            <List dense style={{padding: 0}}>*/}
                        {/*                                <ListItem disableGutters>*/}
                        {/*                                    <ListItemIcon>*/}
                        {/*                                        <DoneAllTwoToneIcon*/}
                        {/*                                            style={{*/}
                        {/*                                                fontSize: '1rem',*/}
                        {/*                                                marginBottom: '.3em',*/}
                        {/*                                                width: 50,*/}
                        {/*                                                color: theme.palette.common.yellow,*/}
                        {/*                                            }}*/}
                        {/*                                        />*/}
                        {/*                                    </ListItemIcon>*/}
                        {/*                                    <ListItemText*/}
                        {/*                                        classes={{primary: classes.listText}}*/}
                        {/*                                        primary='Built a fully responsive landing page using React and Material-UI.*/}

                        {/*'*/}
                        {/*                                    />*/}
                        {/*                                </ListItem>*/}
                        {/*                            </List>*/}
                        {/*                        </Grid>*/}
                        {/*                        <Grid item>*/}
                        {/*                            <List dense style={{padding: 0}}>*/}
                        {/*                                <ListItem disableGutters>*/}
                        {/*                                    <ListItemIcon>*/}
                        {/*                                        <DoneAllTwoToneIcon*/}
                        {/*                                            style={{*/}
                        {/*                                                fontSize: '1rem',*/}
                        {/*                                                marginBottom: '.3em',*/}
                        {/*                                                width: 50,*/}
                        {/*                                                color: theme.palette.common.yellow,*/}
                        {/*                                            }}*/}
                        {/*                                        />*/}
                        {/*                                    </ListItemIcon>*/}
                        {/*                                    <ListItemText*/}
                        {/*                                        classes={{primary: classes.listText}}*/}
                        {/*                                        primary='Incorporated a slideshow to showcase features.*/}
                        {/*                  '*/}
                        {/*                                    />*/}
                        {/*                                </ListItem>*/}
                        {/*                            </List>*/}
                        {/*                        </Grid>*/}

                        {/*                        <Grid item>*/}
                        {/*                            <List dense style={{padding: 0}}>*/}
                        {/*                                <ListItem disableGutters>*/}
                        {/*                                    <ListItemIcon>*/}
                        {/*                                        <DoneAllTwoToneIcon*/}
                        {/*                                            style={{*/}
                        {/*                                                fontSize: '1rem',*/}
                        {/*                                                marginBottom: '.3em',*/}
                        {/*                                                width: 50,*/}
                        {/*                                                color: theme.palette.common.yellow,*/}
                        {/*                                            }}*/}
                        {/*                                        />*/}
                        {/*                                    </ListItemIcon>*/}
                        {/*                                    <ListItemText*/}
                        {/*                                        classes={{primary: classes.listText}}*/}
                        {/*                                        primary='Worked effectively on a team of developers.*/}
                        {/*                 .'*/}
                        {/*                                    />*/}
                        {/*                                </ListItem>*/}
                        {/*                            </List>*/}
                        {/*                        </Grid>*/}
                        {/*                    </Grid>*/}
                    {/*</Grid>*/}

                    {/* <Grid item>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              My first team project.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              For this project, I was tasked with creating a landing page for a
              music suggesting application using HTML and CSS. This was the
              first time I was empowered to create something without a mockup.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              Since the Covid-19 pandemic had just begun and everyone was
              ordered to stay home I came up with the idea for Isolation
              Recommendations. I feel this added to the project by incorporating
              real-world issues for increased relatability with potential
              consumers.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              This was a great project to get my feet wet with. It was my
              introduction to the world of team development. I was able to meet
              my goals and went even further by using React and Material-UI to
              create a slideshow.
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              paragraph>
              The biggest obstacle I faced for this was that we were only given
              half the normal amount of time to complete the project. I was
              confident enough in the concepts I had learned to meet the
              deadline with more than the minimum viable product.
            </Typography>
          </Grid> */}
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: 'transparent'}}
                            component={RouterLink}
                            alt='forward to arc development'
                            to='/arc'
                            onClick={() => props.setSelectedIndex(2)}>
                            <ArrowForwardIcon className={classes.arrow}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Grid item>
                        <img
                            src={isolationMobile}
                            alt='mobile isolation'
                            style={{maxHeight: matchesSM ? 200 : 400}}
                        />
                    </Grid>
                </Hidden>{' '}
            </Grid>
            {/* showcase block */}
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
                            src={isolation}
                            alt='desktop isolation-recommendations'
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
                                src={isolationMobile}
                                alt='mobile isolation-recommendations'
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
