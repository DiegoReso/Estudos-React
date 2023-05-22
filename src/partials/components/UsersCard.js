
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import EditOffTwoToneIcon from '@mui/icons-material/EditOffTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalUser from './ModalUser';

import { useState } from 'react';

const UsersCard =({name,last_name,avatar,id,email,onRemove})=>{

  const [open,setOpen] = useState(false)


  const handleCLickButtonModal=()=>{

    setOpen(!open)

  }

  const handleDeleteUser=()=>{
    onRemove()
  }


  return(
    <>

<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        title={`${name} ${last_name}`}
        subheader={email}
      />
      

      <CardActions disableSpacing>
        <IconButton onClick={handleCLickButtonModal} aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleDeleteUser} aria-label="share">
          <EditOffTwoToneIcon />
        </IconButton>
      
      </CardActions>
     
    </Card>
    <ModalUser open={open} handleClose={handleCLickButtonModal} handleRemoveUser={handleDeleteUser} />
    </>
  )
}

export default UsersCard