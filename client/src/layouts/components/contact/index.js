import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';




const styles = (theme) => ({
    root: {
        marginTop: '70px',
        marginLeft: '40px',
        marginRight: '40px',
        width:'70%',
        backgroundColor: '100%',
    },
    heroUnit: {
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    content: {
        padding: '20px',
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
    },
    textField: {
        margin: theme.spacing.unit,
    },
    textFieldEmail: {
        margin: theme.spacing.unit,
        width: '95%'
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Contact extends React.Component {
    state = {
        name:'',
        message:'',
        email:'',
        disableButton: true,
        open: false
    };

    handleChange = (e,value) => {
        this.setState({ [value]:e.target.value })
        if(e.target.value !== '' && value === 'message' ) {
            this.setState({
                disableButton: false
            })
        }
        if(e.target.value === '' && (value === 'message'|| value === 'email')) {
            this.setState({
                disableButton: true
            })
        }
    };

     async handleSubmit(name, email, message) {

         this.setState({
             message: '',
             name: '',
             email:'',
             open: true,
             disableButton: true
         });
         
         const form = await axios.post('api/form/', {
             name,
             email,
             message
         });

    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { classes } = this.props;
        const { name, message, email , disableButton } = this.state;
        return(
            <div className={classes.root}>
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                            Contact Me
                        </Typography>
                        <Typography variant="title" align="center" color="textSecondary" paragraph>
                            If you have any question, just contact me by mail adn i will reply as soon as posible
                        </Typography>
                    </div>
                </div>
                <Paper className={classes.content}>
                    <TextField
                        id='email'
                        label='Email'
                        value={email}
                        onChange={(e) => this.handleChange(e, 'email')}
                        variant='outlined'
                        className={classes.textField}

                    />
                    <TextField
                        id='name'
                        label='Name'
                        value={name}
                        onChange={(e) => this.handleChange(e, 'name')}
                        variant='outlined'
                        className={classes.textField}

                    />
                    <TextField
                        id='outlined-email-input'
                        className={classes.textFieldEmail}
                        label='message'
                        value={message}
                        onChange={(e) => this.handleChange(e, 'message')}
                        rows={5}
                        multiline
                        variant='outlined'

                    />
                    <Button  disabled={disableButton} variant="contained" color="primary" className={classes.button} onClick={() => this.handleSubmit(name, email, message)}>
                    Envoyer
                    <Icon className={classes.rightIcon} />
                    </Button>
                </Paper>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Wait for the answer</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            Hide
                        </Button>,
                    ]}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Contact);
