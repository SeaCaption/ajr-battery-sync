import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import BatteryAlert from '@material-ui/icons/BatteryAlert'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        overflow: 'hidden'
    },
});

function generateDevice(props) {
    const {classes} = props;

    return <Paper square={true} elevation={1} className={classes.root}>
        <Grid container spacing={16}>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subheading">
                            OnePlus 5T
                        </Typography>
                        <Typography gutterBottom>Last Sync 9-13-2018</Typography>
                        <Typography color="textSecondary">ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{cursor: 'pointer'}}>Remove</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton aria-label="Battery Indicator">
                        <BatteryAlert style={{ fontSize: 36 }}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
}

function Items(props) {
    return generateDevice(props)
}

Items.propTypes = {
    classes: PropTypes.object.isRequired,
    numberOfDevices: PropTypes.number.isRequired
};

export default withStyles(styles)(Items);
