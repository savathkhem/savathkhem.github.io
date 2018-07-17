import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core/';
import Logo from "../Logo";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './Landing.css'
import ModalNew from "./../ModalNew";
import Login from "./../Login";
import ProfileFrame from "./../ProfileFrame";
import ProfileMenu from "./../ProfileMenu";

const styles = theme => ({
  body: {
    position: 'relative',
    backgroundColor: '#1b1b1b',
    backgroundImage: 'linear-gradient(to bottom, #1b1b1b 0%, #ffecd2 373737%)',
    // height: '225rem',
    minHeight: '300vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '8rem'
  },
  button: {
    position: 'absolute',
    width: '35rem',
    height: '10rem',
    bottom: '50vh',
    borderRadius: '100px',
    fontFamily: 'Futura, Helvetica, sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '10rem',
    textTransform: 'uppercase',
    fontSize: '3rem',
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(to bottom, #ff1177 0%, #f50057 100%)',
    color: '#ffffff',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    position: 'absolute',
    top: '10vh',
    height: 'auto',
  },
});

const Gradients = (props) => (
    <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#212121" />
                <stop offset="100%" stopColor="#1b1b1b" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#373737" />
                <stop offset="100%" stopColor="#494949" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#707070" />
                <stop offset="100%" stopColor="#8d8d8d" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#aeaeae" />
                <stop offset="100%" stopColor="#bcbcbc" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#c2c2c2" />
                <stop offset="100%" stopColor="#c7c7c7" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#fafafa" />
                <stop offset="100%" stopColor="#EDBC39" />
            </linearGradient>
        </defs>
    </svg>
);


const Scroll = (props) => (
    <div className="scroll">
        <p>Scroll</p>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
            <polygon className="fill-3" points="167,73 83.5,298.9 0,73 "/>
            <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 "/>
        </svg>
    </div>
);


const HeroBanner = ({ image, min, max, children }) => (
  <div className="hero-container">
      <Parallax offsetYMin={min} offsetYMax={max}>
          <div
              className="hero-image"
              style={{ backgroundImage: `url(${image})` }}
          />
      </Parallax>
      <div className="hero-children">{children}</div>
  </div>
);

class Landing extends Component {
  state = { 
    modalOpen: false,
    profileOpen: false,
    profile: [],

  };

  handleProfileClick = () => {
    this.setState(state => ({ profileOpen: !state.profileOpen }));
  };

  handleModalClick = () => {
    this.setState(state => ({ modalOpen: !state.modalOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
    <ParallaxProvider>
        <main className={classes.body}>
        <div className={classes.row}>
            <Button onClick={this.handleProfileClick} onClose={this.handleProfileClick}>
                <ProfileFrame 
                    style={{float: "left"}}
                    alt="Savath Khem"
                    src="./images/Savath.jpg"  
                />
            </Button>

            <ProfileFrame 
                style={{float: "right"}}
                alt="Cezar Carvalheas"
                src="./images/Cezar.jpg"  
            />
            <ProfileFrame 
                style={{float: "left"}}
                alt="Nathan Geckle"
                src="./images/Nathan.jpg"  
            />
            <ModalNew 
              open={this.state.profileOpen}
              onClose={this.handleProfileClick}>
              <ProfileMenu />
            </ModalNew>
        </div>
            <Scroll />
            <Gradients />
            <HeroBanner
                min={'-20%'}
                max={'20%'}
                image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg"
            >
            <Typography variant="display4" gutterBottom>
              <Logo className={classes.logo}/>
            </Typography>

            </HeroBanner>
            {/* <ParallaxWord /> */}
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleModalClick} onClose={this.handleModalClick}>
              Get Started
            </Button>
            <ModalNew 
              open={this.state.modalOpen}
              onClose={this.handleModalClick}>
              <Login />
            </ModalNew>
            {/* <Fullscreen /> */}
        </main>
    </ParallaxProvider>
)
}
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
