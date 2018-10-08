import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cards from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {

    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};


class MyCard extends React.Component {
    render = () => {
        const { classes, image, description, title } = this.props;

        return (
            <div>
                <Cards className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            View Code
                        </Button>
                    </CardActions>
                </Cards>
            </div>
        )
    }
}

export default withStyles(styles)(MyCard)