import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import loveCode from '../assets/images/love-code.jpg';
import mobileLoveCode from '../assets/images/mobile-love-code.jpg';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    margin: '4em 0 10em',
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
  dialog: {
    marginTop: '7em',
    backgroundColor: theme.palette.common.black,
    padding: '1em 7em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1em',
    },

    [theme.breakpoints.down('xs')]: {
      width: '95%',
      padding: '0 1em',
      margin: 0,
    },
  },
  dialogContent: {
    backgroundColor: theme.palette.common.black,
  },
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${loveCode})`,
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
    marginTop: '1em',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: theme.palette.common.gray,
  },
  projectButton: {
    width: 174,
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [open]);

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

  const onConfirm = (e) => {
    setLoading(true);
    axios
      .get('https://us-central1-portfolio-fd769.cloudfunctions.net/sendMail', {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message Sent!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((err) => {
        setLoading(false);
        setOpen(false);
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const ButtonContents = (
    <>
      <span style={{ marginRight: 10 }}>Send Message</span>
      <ButtonArrow width={15} height={15} fill={theme.palette.common.yellow} />
    </>
  );

  return (
    <Grid container direction='row' className={classes.contactContainer}>
      {/* image block */}
      <Hidden mdDown>
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
            textAlign='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography
                  variant='h5'
                  align='center'
                  style={{ fontSize: matchesSM && '5rem' }}>
                  Collaborate <br></br> Develop <br></br> Design
                </Typography>
                <Typography
                  variant='subtitle2'
                  style={{ fontSize: matchesSM && '7rem' }}
                  align='center'>
                  Create
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        style={{
          marginBottom: 0,
          marginTop: '3em',
        }}
        item
        container
        direction='column'
        alignItems='center'
        // justify='center'
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
            <Grid item container>
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
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                classes={{ disabled: classes.disabledButton }}
                variant='outlined'
                color='secondary'
                className={classes.projectButton}
                component={Link}
                // to='/'
                onClick={() => setOpen(true)}>
                {ButtonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        classes={{ paper: classes.dialog }}
        open={open}
        onClose={() => setOpen(false)}>
        <DialogContent align='center' className={classes.dialogContent}>
          <Grid container direction='column'>
            <Grid item>
              <Typography style={{fontSize: '2.3rem'}} variant='h3' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
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
            style={{ margin: '1em 0' }}
            alignItems='center'
            justify='space-between'>
            <Grid item>
              <Button
                style={{ fontSize: '.8rem' }}
                color='secondary'
                onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                classes={{ disabled: classes.disabledButton }}
                variant='outlined'
                color='secondary'
                className={classes.projectButton}
                component={Link}
                // to='/'
                onClick={onConfirm}>
                {loading ? (
                  <CircularProgress color='secondary' size={25} />
                ) : (
                  ButtonContents
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Hidden lgUp>
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
            textAlign='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography
                  variant='h5'
                  align='center'
                  style={{ fontSize: matchesSM && '5rem' }}>
                  Collaborate <br></br> Develop <br></br> Design
                </Typography>
                <Typography
                  variant='subtitle2'
                  style={{ fontSize: matchesSM && '7rem' }}
                  align='center'>
                  Create
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}
