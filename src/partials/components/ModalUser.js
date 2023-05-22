import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'



const ModalUser =({handleClose,open,handleRemoveUser})=>{



  return(


    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
 
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Gostaria de excluir o usuario da lista?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={handleRemoveUser} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>

  )
}

export default ModalUser