import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import NavBar from './NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header =()=>{

  const [open,setOpen] =useState(false)
  const navigate = useNavigate()


  const handleChangePage =route =>{
    navigate(route)
    handleToggleMenu()
  }

 const handleToggleMenu =()=>{
  setOpen(!open)
 }


  return(
    
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={handleToggleMenu}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <NavBar open={open} handleToggleMenu={handleToggleMenu} handleCLickMenu={handleChangePage} />
        </Box>
      );
    }



export default Header