import React from 'react';
import Profil from './layouts/components/profil';
import Project from './layouts/components/project';
import Contact from './layouts/components/contact';
import Footer from './layouts/footer';
import Navigation from './layouts/navigation';
import Header from './layouts/header';
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: '#fafafa',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5%',
        overflow: 'scroll'
    },
};

class App extends React.Component {
  render() {
      const { classes } = this.props;

      return (
        <div className={ classes.root }>
           <Header/>
           <Navigation/>
                <Switch>
                    <Route exact path={'/profil'} component={Profil} />
                    <Route exact path={'/project'} component={Project} />
                    <Route exact path={'/contact'} component={Contact} />
                </Switch>
        </div>
    );
  }
}

export default withStyles(styles)(App);
