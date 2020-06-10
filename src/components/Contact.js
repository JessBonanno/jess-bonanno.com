import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import loveCode from '../assets/images/love-code.jpg';
import mobileLoveCode from '../assets/images/mobile-love-code.jpg';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    margin: '4em 0 15em',
    backgroundColor: theme.palette.common.black,
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'center',
      minHeight: 800,
      marginBottom: '7em',
    },
  },

  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${mobileLoveCode})`,
    },
  },
  icon: {
    // marginLeft: '2em',
    color: theme.palette.common.yellow,
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.yellow}`,
    marginTop: '5em',
    borderRadius: 5,
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction='row' className={classes.contactContainer}>
      <Grid
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        item
        container
        direction='column'
        alignItems='center'
        justify='center'
        lg={4}
        xl={3}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h3'
                style={{ lineHeight: 1, fontSize: '2.5rem', textAlign: 'left' }}
                align={matchesMD ? 'center' : undefined}>
                Contact Me
              </Typography>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.paleGreen }}
                align={matchesMD ? 'center' : undefined}>
                Let's connect
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <PhoneIphoneTwoToneIcon
                  alt='phone'
                  className={classes.icon}
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.paleGreen,
                    fontSize: '1rem',
                  }}>
                  <a
                    href='tel:973.803.2606'
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    (973)803-2606
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <EmailTwoToneIcon
                  alt='envelope'
                  className={classes.icon}
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.paleGreen,
                    fontSize: '1rem',
                  }}>
                  <a
                    href='mailto:jessbonanno@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    jessbonanno@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {/* inputs */}
            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: '20em' }}>
              <Grid item style={{ marginBottom: '.5em' }}>
                <TextField
                  fullWidth
                  label='Name'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '.5em' }}>
                <TextField
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  label='Email'
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '.5em' }}>
                <TextField
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  label='Phone'
                  id='phone'
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={10}
                value={message}
                id='message'
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justify='center'
              style={{ marginTop: '2em', marginBottom: '7em' }}>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.projectButton}
                component={Link}
                // to='/'
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}>
                <span style={{ marginRight: 10 }}>Send Message</span>
                <ButtonArrow
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  width={15}
                  height={15}
                  fill={theme.palette.common.yellow}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* image block */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        justify='center'
        className={classes.background}
        lg={8}
        xl={9}>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : '3em' }}
          textAlign={matchesMD ? 'center' : 'inherit'}>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h5' align='center'>
              Collaborate <br></br> Develop <br></br> Design
              </Typography>
              <Typography
                variant='subtitle2'
                align='center'>
                Create
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
