import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core';
import { FlashAutoRounded } from '@material-ui/icons';
//CSS rules
const useStyles=makeStyles({
    particlesCanva:{
        position: 'absolute',
        height: '100%',
        width: '100vw',
        opacity: 0.3
    }

});



const Home = () => {
    const classes=useStyles();
    return (
        <>
            
           <NavBar/>
           <Header/>
           <Particles
            params={{
                particles: {
                    number:{
                        value: 45,
                        density:{
                            enable: true,
                            value_area : 1000
                        },
                        
                    },
                    shape:{
                        type: 'circle',
                        stroke: {
                            width: 1,
                            color : 'tomato'
                        }
                    },
                    size:{
                        value: 8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: true
                        }
                    }
                }
            }}
            
            className={classes.particlesCanva}
            />
            
            
        </>
    )
}

export default Home
