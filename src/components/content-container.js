import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import BatteryHud from '../components/battery-container/battery-hud'

const styles = theme => ({
    root: {
        position: "relative",
        display: "block",
        margin: 10,
        top: 0,
        backgroundColor: "#CCCCCC",
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabMoveUp: {
        transform: "translate3d(0, -46px, 0)",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut,
        }),
    },
    fabMoveDown: {
        transform: 'translate3d(0, 0, 0)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp,
        }),
    },
    snackbar: {
        position: 'fixed',
    },
    snackbarContent: {
        width: '100%',
    },
});

class Container extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        console.log('close');
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        const fabClassName = classNames(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);
        return (
            <div className={classes.root}>
                <BatteryHud/>
                <div>
                    <Button variant="fab" color="secondary" className={fabClassName} onClick={this.handleClick}>
                        <AddIcon/>
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={4000}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'snackbar-fab-message-id',
                            className: classes.snackbarContent,
                        }}
                        message={<span id="snackbar-fab-message-id">Added</span>}
                        action={
                            <Button color="inherit" size="small" onClick={this.handleClose}>
                                Undo
                            </Button>
                        }
                        className={classes.snackbar}
                    />
                </div>

            </div>
        );
    }
}


Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);