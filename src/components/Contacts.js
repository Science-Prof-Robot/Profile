import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {TextField,Typography,Button,Grid,Box, withStyles} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import NavBar from './NavBar';

const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color: 'tomato'
        },
        "& label":{
            color:'tan'
        },
        "& .MuiOutlinedInput-root":{
            borderColor:'tan'
        },
        "&:hover fieldset":{
            borderColor:'tan',
        },
        "& .Mui-focussed fieldset":{
            borderColor:'tan'
        }

    }
})(TextField);

const useStyles=makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform:'translate(-50%,-50%)',
        position:'absolute'
    },
    button:{
        marginTop:'1rem',
        color: 'tomato',
        borderColor:'tomato'
    }
}))

const Contacts = () => {
    const classes=useStyles();
    return (
        <>
           <NavBar/>
           <Box component='div' style={{background:'#233',height:'100vh'}} >
               <Grid container justify='center'>
                   <Box component='form' className={classes.form}>
                       <Typography variant='h5'
                       style={{color:'tomato'}}
                       
                       >
                           Contact Me

                       </Typography>
                       <br/>
                       <InputField
                       fullWidth
                       label='Name'
                       variant='outlined'
                       inputProps={{style:{color:'white'}}}

                       margin='normal'
                       >
                           <br/>
                       
                       </InputField>
                       <InputField
                       fullWidth
                       label='Email'
                       variant='outlined'
                       margin='normal'
                       inputProps={{style:{color:'white'}}}
                       >
                       
                       </InputField>
                       <InputField
                       fullWidth
                       label='Message'
                       variant='outlined'
                       margin='normal'
                       inputProps={{style:{color:'white'}}}
                       >
                       
                       </InputField>

                       <Button fullWidth
                       variant='outlined'
                       endIcon={<SendIcon/>}
                       className={classes.button}
                       >
                       Send
                       </Button>


                   </Box>
                    
               </Grid>
           </Box>
            
        </>
    )
}

export default Contacts
