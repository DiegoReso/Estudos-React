import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';




const NavBar=({open,handleToggleMenu, handleCLickMenu})=> {
  return (
   
  <Drawer
   open={open}
   onClose={handleToggleMenu}
   >
    <List>

    <ListItemButton onClick={()=>handleCLickMenu('/')} >
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText>
          Home
        </ListItemText>
    </ListItemButton>

    <ListItemButton onClick={()=>handleCLickMenu('/users')} >
        <ListItemIcon>
          <PersonIcon/>
        </ListItemIcon>
        <ListItemText>
          Users
        </ListItemText>
    </ListItemButton>

    <ListItemButton onClick={()=>handleCLickMenu('/users/register')} >
        <ListItemIcon>
          <PersonIcon/>
        </ListItemIcon>
        <ListItemText>
          Register User
        </ListItemText>
    </ListItemButton>

    </List>
  </Drawer>
    
  );
}

export default NavBar


