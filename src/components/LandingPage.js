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
    marginTop: '4em',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
    width: '100%',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${mobileLoveCode})`,
      backgroundPosition: 'center',
    },
  },
});
export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container justify='center' className={classes.mainContainer}>
      <Grid item>
        <Typography
          className={classes.headline}
          variant='h1'
          style={{ fontSize: matchesSM && '2.5rem', marginTop: '2em' }}>
          When you love what you do
        </Typography>
        <Typography
          variant='h2'
          style={{ fontSize: matchesSM && '2.3rem', marginTop: '1em' }}>
          Is it even work?
        </Typography>
      </Grid>
    </Grid>
  );
}
