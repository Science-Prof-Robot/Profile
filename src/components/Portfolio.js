import React from 'react'
import NavBar from './NavBar';
import { makeStyles, Box, Grid, CardActionArea, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
const useStyles=makeStyles(theme=>({
    mainContainer: {
        background: '#233',
        height: '100%'

    },
    cardContainer:{
        maxWidth: 345,
        margin: '3rem',
        margin: '5rem auto'
        
    }
}))

const Portfolio = () => {

    const classes=useStyles();
    return (
        <Box component='div' className={classes.mainContainer}>
            <NavBar/>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project1}
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 1
                                </Typography>
                                <Typography gutterBottom variant='body2' color='textSecondary'>
                                    BAda ge mazaa aya migi vey!
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" colory='primary' > 
                                SHare

                                </Button>
                                <Button size="small" colory='primary' > 
                                Live Demo

                                </Button>
                            </CardActions>
                        
                    </Card>

                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project2}
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography gutterBottom variant='body2' color='textSecondary'>
   Buddulliyan                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" colory='primary' > 
                                SHare

                                </Button>
                                <Button size="small" colory='primary' > 
                                Live Demo

                                </Button>
                            </CardActions>
                       
                    </Card>

                </Grid>

            </Grid>
            
        </Box>
    )
}

export default Portfolio
