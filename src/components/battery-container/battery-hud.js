import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Items from './items';

const styles = {
    demo: {},
    root: {
        width: "100%",
    },
};


class BatteryHud extends React.Component {
    constructor(props){
        super(props);
        this.handleDevice = this.handleDevice.bind(this);
    }

    state = {
        dense: false,
        secondary: false,
    };
    handleDevice(){}

    render() {
        const {classes} = this.props;
        const {dense, secondary} = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.demo}>
                    <Items numberOfDevices={2} dense={dense} secondary={secondary}/>
                </div>

            </div>
        );
    }
}

BatteryHud.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BatteryHud);