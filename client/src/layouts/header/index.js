import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { changeIsMenuOpen } from '../../actions';
import Avatar from '@material-ui/core/Avatar';
import bertrand from '../../images/bertrand.png'
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const styles = {
    root: {
        width: '100%',
        backgroundColor:'#fafafa',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#222'
    },

    button: {
        color: '#222',
        marginRight:'5px',
        flex: 1
    },
    avatar: {
        margin: '10px'
    }
};

class Header extends React.Component {


    handleToogleIsOpen = () => {
        const { toogleIsOpen } = this.props;
        toogleIsOpen();
    };

    handleHistory = () => {
        const {  history } = this.props;
        if(history.location.pathname==='/project'){
            return 'Projet'
        }
        if(history.location.pathname==='/contact'){
            return 'Contact'
        }
        return 'Profil'

    }


    render () {
        const { classes, history } = this.props;
        return(
                <AppBar
                    position='fixed'
                    className={classes.root}
                >
                    <Toolbar variant="dense">
                        <IconButton className={classes.button} onClick={this.handleToogleIsOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            {this.handleHistory()}
                        </Typography>
                    </Toolbar>
                    <Avatar classes={classes.avatar} alt="Bertrand Glaser" src={bertrand} className={classes.avatar} />
                </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    toogleIsOpen: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        isOpen: state.isMenuOpen,
    }),
    dispatch =>({
        toogleIsOpen: () => dispatch(changeIsMenuOpen())
    })
)(withStyles(styles)(withRouter(Header)));
