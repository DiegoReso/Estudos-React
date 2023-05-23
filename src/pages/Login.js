import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login =()=>{
  return(
    <>
        <div>
        <TextField
       
          sx={{mt: '40px'}}
          label="Nome"
          variant="outlined"
          name='name'
          
          />
      </div>

      <div>
        <TextField
        
        sx={{mt: '40px'}}
        label="Função"
        variant="outlined"
        name='job'
      
        />
      </div>

      <Button
        sx={{mt: '40px'}}
        variant='contained'
    
        >
          Entrar
      </Button> 

    </>

  )
}

export default Login