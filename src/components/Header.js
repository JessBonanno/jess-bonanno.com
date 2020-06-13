import React, { useState, useEffect } from 'react';
// material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// local components
import { Typography } from '@material-ui/core';

// ! this will allow the header bar to float above the scrolled page
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  name: {
    ...theme.typography.tab,
    textDecoration: 'none',
    fontFamily: 'Shadows Into Light Two, cursive',
    minWidth: 10,
    marginLeft: '25px',
    fontSize: '2rem',
    color: theme.palette.common.paleGreen,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '1em',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '10px',
    marginRight: '10px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.slate,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: theme.palette.secondary.main,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.slate,
    marginTop: '4.5em',
    minWidth: 250,
    opacity: 0.9,
    [theme.breakpoints.down('sm')]: {
      minWidth: 180,
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.secondary.main,
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleTabChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: 'Projects',
      link: '/projects',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'Planner App',
      link: '/planner',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Isolation Recommendations',
      link: '/isolation-recommendations',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Arc Development',
      link: '/arc',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: 'Home',
      link: '/',
      activeIndex: 0,
    },
    {
      name: 'Projects',
      link: '/projects',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (e) => handleMenuClick(e),
    },
    {
      name: 'Resume',
      link: '/resume',
      activeIndex: 2,
    },
    {
      name: 'About Me',
      link: '/about',
      activeIndex: 3,
    },
    {
      name: 'Contact',
      link: '/contact',
      activeIndex: 4,
    },
  ];

  // ! this will fix the active tab on refresh to be the current tab the user is on
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={handleTabChange}
        indicatorColor='secondary'>
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}></Tab>
        ))}
      </Tabs>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        // ! to change the background we must target the paper parent component of menu
        classes={{ paper: classes.menu }}
        // ! Menu is built on top on MenuList so we can target it by adding MenuListProps and then setting its attributes
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        // ! keeping mounted is for search engine optimization by allowing tabs to be searchable from the DOM
        keepMounted>
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              props.setValue(1);
              handleMenuClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}>
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              divider
              button
              component={Link}
              to={route.link}>
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        {/* AppBar has default position='fixed and color='primary' */}
        <AppBar className={classes.appbar}>
          {/* disableGutters defaults to disableGutters={true} */}
          <Toolbar disableGutters>
            <Typography className={classes.name} component={Link} to='/' >
              Jess Bonanno{' '}
              <span
                style={{
                  fontFamily: 'Exo, sans-serif',
                  fontSize: matchesSM ? '1rem' : '1.3rem',
                  marginLeft: '1em',
                }}>
                a fullstack dev
              </span>
            </Typography>
            {/* conditionally rendering drawer or tabs based on screen size */}
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* this toolbarMargin creates a cushion under the AppBar using theme.mixins.toolbar and pushes hidden content down to be visible */}
      <div className={classes.toolbarMargin} />
    </>
  );
}
