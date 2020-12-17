import React,{useState}from 'react'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,makeStyles, ListItemIcon

} from '@material-ui/core'
import {

    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'
import Footer from './Footer';
//CSS styles
const useStyles=makeStyles(theme =>({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar:{
        display: 'block',
        margin: '0.5 rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)


    },
    listItem:{
        color: 'tan'
    }
    

}));
const menuItems=[
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: '/'

    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: '/resume'

    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: './portfolio'

    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact Me",
        listPath: './contacts'

    }
]

const NavBar = () => {
    const classes=useStyles();
    const [state,setState]=useState({
        right: false
    })
    const toggleSlider=(slider,open)=>()=>{
        setState({...state,[slider]: open});

    }
    const sideList=slider=>(
        <Box component='div' className={classes.menuSliderContainer} onClick={toggleSlider(slider,false)}>
        <Avatar className={classes.avatar} src={avatar} alt='Ashish'/>
        <Divider/>
        <List>
            
              
                    {menuItems.map((listItem,key)=>(
                        <ListItem button key={key} component={Link} to={listItem.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {listItem.listIcon}

                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={listItem.listText}/>

                        </ListItem>

                    ))}
                    
                

           

        </List>

    </Box>

    );
    return (
        <>
       

        <Box component='nav'>
            <AppBar position='static' style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                       <ArrowBack style={{color: 'tomato'}}/>

                    </IconButton>
                    <Typography variant='h5' style={{color: 'tan' }}> Ashish Dogra Portfolio</Typography>
                    <MobileRightMenuSlider open={state.right} anchor='left' onClose={toggleSlider('right', false)}>  
                    {sideList("right")}
                    <Footer/>
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
            
        </Box>
        </>
    )
}

export default NavBar
