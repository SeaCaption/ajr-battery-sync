import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    demo: {},
    root: {
        width: "100%",
    },
    list: {
        width: '85%',
        marginTop: 5,
        marginBottom: 12,
        border: "1px solid #EDF6E9",
        borderRadius: "2px"
    }
};

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class BatteryHud extends React.Component {
    state = {
        dense: false,
        secondary: false,
    };

    render() {
        const {classes} = this.props;
        const {dense, secondary} = this.state;

        return (
            <div className={classes.root}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={event => this.setState({dense: event.target.checked})}
                                value="dense"
                            />
                        }
                        label="Enable dense"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={event => this.setState({secondary: event.target.checked})}
                                value="secondary"
                            />
                        }
                        label="Enable secondary text"
                    />
                </FormGroup>
                <div className={classes.demo}>
                    <List dense={dense}>
                        {generate(
                            <ListItem className={classes.list}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                    </List>
                </div>

            </div>
        );
    }
}

BatteryHud.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BatteryHud);