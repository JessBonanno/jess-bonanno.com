import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import theme from './ui/Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import loveCode from '../assets/images/love-code.jpg';
import mobileLoveCode from '../assets/images/mobile-love-code.jpg';

const useStyles = makeStyles({
  mainContainer: {
    margin: '4em 0 15em',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
    width: '100%',
    minHeight: 1200,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10em',
      backgroundPosition: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
      backgroundPosition: 'center',
      minHeight: 1200,
      marginBottom: 0,
    },
  },
  headline: {
    lineHeight: 2,
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
});
export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container justify='center' className={classes.mainContainer}>
      <Grid item style={{marginTop: matchesSM ? '5em' : '10em'}}>
        <Typography
          className={classes.headline}
          variant='h1'
          style={{ marginTop: matchesMD ? '2em' : '1em' }}>
          When you love what you do
        </Typography>
        <Typography
          variant='h2'
          className={classes.headline}
          style={{
            fontFamily: 'Nanum Brush Script, cursive',
            fontSize: matchesSM ? '4rem' : '7rem',
            marginTop: matchesMD && '1em',
          }}>
          Is it even work?
        </Typography>
      </Grid>
    </Grid>
  );
}
