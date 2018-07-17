import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/';
import Logo from "./../Logo";
import MenuIcon from '@material-ui/icons/Menu';
import DrawerLeft from "./../DrawerLeft";

const styles = theme => ({
  appBar: {
    backgroundColor: "#424242",
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class NavBar extends React.Component {
  state = {
    open: false,
    drawerOpen: false,
  };

  handleDrawerClick = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }));
    this.setState(state => ({ open: !state.open }));

  };
  
  render() {
    const { classes } = this.props;
    const { open } = this.state;


    return (
      <div>
        <AppBar
          className={classes.appBar}
        >
          <Toolbar disableGutters={!open}>

         {/* <IconButton onClick={this.handleProfileClick}>
            <MenuIcon />
          </IconButton> */}
          <DrawerLeft />

            <Typography variant="title" color="inherit" className={classes.flex}>
              <Logo />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);