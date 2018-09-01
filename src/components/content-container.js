import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
/*import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';*/
const styles = {
    root: {
        position: 'relative',
        top: 0,
        height: '100%',
        backgroundColor: '#CCCCCC',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function Container(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            hello
        </div>
    );
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);