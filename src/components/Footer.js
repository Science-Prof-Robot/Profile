import React from 'react'
import { BottomNavigation, BottomNavigationAction, withStyles, makeStyles } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
const useStyles=makeStyles(theme=>({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWith: 0,
            maxWidth: 250
        }

    ,
    "& .MuiSvgIcon-root":{

        fill: 'tan',
        "&:hover":{
            fill: 'tomato',
            fontSize: '1.8rem'
        }
    }}

}))
const Footer = () => {
    const classes=useStyles()
    return (
        <>
        <BottomNavigation
        width='auto' style={{background:'#222'}}
        >
            <BottomNavigationAction
            style={{padding:0  , }}
            icon={<Facebook/>}
            className={classes.root}
            >
                
            </BottomNavigationAction>
            <BottomNavigationAction
            style={{padding:0  , }}
            icon={<Twitter/>}
            className={classes.root}
            >
                
            </BottomNavigationAction>
            <BottomNavigationAction
            style={{padding:0  , }}
            icon={<Instagram/>}
            className={classes.root}
            >
                
            </BottomNavigationAction>

        </BottomNavigation>
        </>
    )
}

export default Footer
