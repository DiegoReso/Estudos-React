import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const RegisterUser=()=>{
  return(
    <>
      <div>
        <TextField
          sx={{mt: '40px'}}
          id="outlined-basic"
          label="Nome"
          variant="outlined" />
      </div>

      <div>
        <TextField
        sx={{mt: '40px'}}
        id="outlined-basic"
        label="Função"
        variant="outlined" />
      </div>

      <Button
        sx={{mt: '40px'}}
        variant='contained'>
          Registrar
      </Button> 

    </>
  )
}

export default RegisterUser