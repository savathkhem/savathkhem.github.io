import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton, Divider } from '@material-ui/core/';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Card from './../Card';


const styles = {
  list: {
    width: 250,
  },
};

class DrawerLeft extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <IconButton onClick={this.toggleDrawer('left', false)}>
        <ChevronLeftIcon />
      </IconButton>
      Portfolio
      <Divider />
      <List>

        <Card 
          title='TrailerPark2.0'
          src='./images/trailerpark2.0.jpg'
          url='http://www.trailerpark.site'
          overview='TrailerPark2.0 is a fullstack application.  This time we used react, express, mongodb, and material-ui. We are able to create a more responsive and dynamic web application.'      
        />

        <Card 
          title='ClickyGame'
          src='./images/clickygame.jpg'
          url='https://savathkhem.github.io/ClickyGame/'
          overview='Fun memory game using react'      
        />

        <Card 
          title='MongoScraper'
          src='./images/mongoscraper.jpg'
          url='https://fierce-falls-90887.herokuapp.com/'
          overview='MongoScraper is a scraping tool.  Using MongoDB, and cherios to scrape the net.  I used bootstrap css library for the styling'      
        />

        <Card 
          title='Motivator'
          src='./images/motivator.jpg'
          url='https://secure-tor-11865.herokuapp.com/'
          overview="This application is designed to motivate!  Our fullstack application is using mySQL, sequalize, bootstrap, firebase oauth, graphjs, twilio.  We're able to log goals, send text reminders/alerts, and analyze the data using graphjs."      
        />

        <Card 
          title='Eat The Burger'
          src='./images/eattheburger.jpg'
          url='https://warm-bayou-21284.herokuapp.com/'
          overview='Using mysql for the backend and materialize css library for the front end.  This application is a fun little excercise where you eat a virtual burger.  You can create, trash, eat, and remake burgers because why the CRUD not?'      
        />

        <Card 
          title='FriendFinder3000'
          src='./images/friendfinder.jpg'
          url='https://guarded-beyond-60241.herokuapp.com/'
          overview='Using materialize css library for the frontend and express this application is takes your inputs and assigns you to a friend based on your inputs.'      
        />

        <Card 
          title='TrailerPark1.0'
          src='./images/trailerpark1.0.jpg'
          url='https://savathkhem.github.io/Trailer-Park/index.html'
          overview="TrailerPark is a place you can go and quickly search up trailers so you can figure out what you want to watch!.  This web app uses api's from youtube, omdb, google, firebase oauth to pull content from the web.  We used materialize for the front end."      
        />

      </List>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('left', true)}><MenuIcon /></IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerLeft);