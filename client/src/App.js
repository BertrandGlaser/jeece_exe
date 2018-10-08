import React from 'react';
import Profil from './layouts/components/profil';
import Project from './layouts/components/project';
import Contact from './layouts/components/contact';
import Navigation from './layouts/navigation';
import Header from './layouts/header';
import { Switch, Route, Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";


const styles = {
    root: {
        position: 'relative',
        backgroundColor: '#fafafa',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5%',

    },
};

class App extends React.Component {

    state = {
        isOpen: true,
    };

    handleClose = () => {
        this.setState({ isOpen: false })
    };


    render() {
        const { classes } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={ classes.root }>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route exact path="/" render={() => (
                            <Redirect to="/profil"/>
                    )}/>
                    <Route exact path={'/profil'} component={Profil} />
                    <Route exact path={'/project'} component={Project} />
                    <Route exact path={'/contact'} component={Contact} />
                </Switch>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isOpen}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Be aware that this site use your cookie</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            Hide
                        </Button>,
                    ]}
                />


            </div>
        );
    }
}

export default withStyles(styles)(App);
