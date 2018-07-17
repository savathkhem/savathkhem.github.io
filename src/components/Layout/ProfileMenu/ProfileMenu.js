import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'



const styles = theme => ({
});

const ProfileFrame = (props) =>  (
  <Fragment>

    <ListItem button onClick={props.resume}>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="far fa-file"></i>
      </ListItemIcon>
      <ListItemText>
        <Typography className={props.classes.menuText}>
          Resume PDF
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button onClick={props.linkedIn}>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-linkedin"></i>
      </ListItemIcon>
      <ListItemText>
        <Typography className={props.classes.menuText}>
          LinkedIn Profile
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button onClick={props.faceBook}>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-facebook"></i>
      </ListItemIcon>
      <ListItemText>
      <Typography className={props.classes.menuText}>
          Facebook Profile
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button onClick={props.gitHub}>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-github-square"></i>
      </ListItemIcon>
      <ListItemText>
      <Typography className={props.classes.menuText}>
          GitHub Profile
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button onClick={props.twitter}>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-twitter-square"></i>
      </ListItemIcon>
      <ListItemText >
      <Typography className={props.classes.menuText}>
          Twitter Profile
        </Typography>
      </ListItemText>

    </ListItem>
  </Fragment>
);

ProfileFrame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileFrame);