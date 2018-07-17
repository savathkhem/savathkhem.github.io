import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CardContent, CardActions, CardHeader, Collapse, IconButton, Typography, Paper } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    card: {
      width: '218px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 10,
      backgroundSize: 'unset',
      paddingTop: '8px',
      borderRadius:5,
    },
    media: {
      width: '200px',
      backgroundSize: 'unset',
      marginLeft: '8px',
    },
    actions: {
      display: 'flex',
      padding: '0',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    primaryText: {
    //   color: '#fafafa',
    },
    header: {
      marginBottom: '0px',
      marginTop: '8px',
    },
  });

class PosterCard extends React.Component {
    state = { 
      expanded: false,
      modalOpen: false,
    };
  
    handleModalClick = () => {
      this.setState(state => ({ modalOpen: !state.modalOpen }));
    };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
        <Paper className={classes.card} elevation={8}>
        <CardHeader className={classes.header}
          subheader={this.props.title}
        />
        <div className={classes.posterBack}>
            <a href={this.props.url} target="_blank">
            <img
                className={classes.media}
                src={this.props.src}
                title={this.props.title} 
                alt ={this.props.title}  
            />
            </a>
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="subheading" className={classes.primaryText}>
                {this.props.title}:
              </Typography>
              <Typography paragraph variant="body2" className={classes.primaryText}>
                {this.props.overview}
              </Typography>
            </CardContent>
          </Collapse>
        </Paper>
    </div>

    );
  }
}
 
PosterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(PosterCard);