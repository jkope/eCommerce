import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function CheckOut(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    "All free today"
        </Typography>
                <Typography component="p">
                    Okay, just kidding, you're not getting anything. This is all pretend just like the American fiduciary system. 
        </Typography>
            </Paper>
        </div>
    );
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);