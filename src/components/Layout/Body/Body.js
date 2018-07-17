import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Typography, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import CarouselContent from "./../Carousel";
import ProfileFrame from "./../ProfileFrame";
import ProfileMenu from "./../ProfileMenu";
import Modal from "./../Modal";
import "./Body.css";

const styles = theme => ({
    welcome: {
        position: 'absolute',
        top: 420,
        color: 'white',
    },
    sectionTitle: {
        position: 'absolute',
        top: 0,
        paddingTop: 80,
        color: 'white',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
      },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit,
      },
      button: {
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
  });


const HeroBanner = ({ image, min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate={'true'}>
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className="hero-children">{children}</div>
</div>
);


class Body extends Component {
    state = { 
      profileOpen: false,
    };

    openUrlResume = () => {
        window.open("https://drive.google.com/open?id=15-4RyRG2PYVrfWJpHNG-dnEnjH0EHe9S","_blank")
    }
      
    openUrlLinkedIn = () => {
        window.open("https://www.linkedin.com/in/savathkhem/","_blank")
    }
      
    openUrlFacebook = () => {
        window.open("https://www.facebook.com/savath.khem","_blank")
    }
      
    openUrlTwitter = () => {
        window.open("https://twitter.com/nerdyKambo/","_blank")
    }

    openUrlGithub = () => {
        window.open("https://github.com/savathkhem/","_blank")
    }

    handleProfileClick = () => {
        this.setState(state => ({ profileOpen: !state.profileOpen }));
    };

    render() {
        const { classes } = this.props;

        return (
            <ParallaxProvider>
                <main>
                    <nav />
                    <HeroBanner
                        min={'-20%'}
                        max={'20%'}
                        image="http://informationcommunicationtechnology.com/wp-content/uploads/2018/06/Desk-hd-backgrounds.jpg"
                    >

                    <Button onClick={this.handleProfileClick} style={{position: "unset"}}>
                        <ProfileFrame 
                            style={{float: "left"}}
                            alt="Savath Khem"
                            src="./images/profile.jpeg"
                        />
                    </Button>
                    <Modal
                        open={this.state.profileOpen}
                        onClose={this.handleProfileClick}
                        >
                        <ProfileMenu 
                            resume={this.openUrlResume}
                            linkedIn={this.openUrlLinkedIn}
                            twitter={this.openUrlTwitter}
                            faceBook={this.openUrlFacebook}
                            gitHub={this.openUrlGithub}
                        />
                    </Modal>

                        <Typography align={"center"} headlineMapping={"title"} variant={"display2"} className={classes.welcome}>
                            Welcome
                        </Typography>
                    </HeroBanner>
                </main>

                <main>
                    <nav />
                    <HeroBanner
                        min={'-20%'}
                        max={'20%'}
                        image="https://www.mockupworld.co/wp-content/uploads/edd/2017/10/free-office-desk-scene-mockup-1000x683.jpg"
                    >
                <Typography align={"center"} headlineMapping={"title"} variant={"display2"} className={classes.sectionTitle}>
                    About Me
                </Typography>
                <CarouselContent />
                    </HeroBanner>
                </main>

            </ParallaxProvider>
        )
    }
}



Body.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Body);