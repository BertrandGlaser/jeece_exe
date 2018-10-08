import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Bertrand from '../../../images/bertrand.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const style = (theme) => ({
    root: {
        marginTop: '70px',
        marginLeft: '40px',
        marginRight: '40px',
        width:'70%',
        height: 'auto',
        backgroundColor:'#fafafa'
    },

    heroUnit: {
    },

    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },

    image: {
        minWidth: '200px',
        minHeight: '100px',
        maxWidth: '200px',
        maxHeight: '200px',
        marginRight: '50px',
    },
    leftPart: {
        flex: 1,
        marginRight: '50px',
    },
    content: {
        //width: '95%'
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
    },
    title:{
        display: 'flex',
        flexDirection: 'row'
    }
});

class Profil extends React.Component {
  render() {
      const { classes } = this.props;
      return(
          <div className={classes.root}>
              <div className={classes.heroUnit}>
                  <div className={classes.heroContent}>
                      <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                          My Profil
                      </Typography>
                  </div>
              </div>
                  <Card className={classes.content}>
                      <CardContent>
                          <div className={classes.title}>
                              <img className={classes.image} src={Bertrand}/>
                              <div>
                                  <Typography gutterBottom variant="headline" component="h2">
                                      Bertrand Glaser
                                  </Typography>
                                  <Typography component="p">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo oluptate  laborum.
                                  </Typography>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
          </div>
      )
  }
}

export default withStyles(style)(Profil);
