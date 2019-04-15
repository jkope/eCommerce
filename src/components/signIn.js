import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import store from '../store';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


function mapStateToProps(state) {
    return {
        userName: state.userName,
    };
}

class SignIn extends React.Component {
    state = {
        name: '',
        password: '',
        fail: false,
        toProducts: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    submit = (e) => {
        e.preventDefault()
        if (this.state.password === 'password') {
            store.dispatch({ type: 'SET_USER', value: this.state.name })
            this.setState({ toProducts: true });
        } else {
            this.setState({ fail: true });
        }
    }

    render() {
        const { classes } = this.props;

        if (this.state.toProducts) {
            return <Redirect to='/' />
        } else {
            return (
                <div style={{display: 'flex', flexDirection: 'column', padding:'1em'}}>
                    <h3>Provide a user name and enter 'password' as the password </h3>
                    <form className={classes.container} noValidate autoComplete="off" >
                        <TextField
                            required
                            id="outlined-name"
                            label="Name"
                            className={classes.textField}
                            defaultValue={this.props.userName ? this.props.userName : this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <div>
                            <TextField
                                required
                                id="outlined-password"
                                label="Password"
                                type='password'
                                className={classes.textField}
                                onChange={this.handleChange('password')}
                                margin="normal"
                                variant="outlined"
                            />
                            <p style={{ color: 'red' }}>{this.state.fail ? `Incorrect Password -- (the password is 'password')` : ''} </p>
                        </div>
                        <Button type="submit" value="Submit" onClick={this.submit.bind(this)}>Submit</Button>

                    </form>
                </div>
            );
        }
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SignIn));
