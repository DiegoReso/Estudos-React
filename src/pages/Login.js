import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import useAuth from '../state/auth'
import { useNavigate } from 'react-router-dom'

const Login =()=>{



 const [form,setForm] = useState({
  email: '',
  password:'',
 })

 const navigate = useNavigate()
 const [isLoading,setIsLoading] = useState(false)
 const {user,setUser} = useAuth()


 const handleInputLogin = e =>{
    const {name,value} = e.target
    setForm({
      ...form,
      [name]:value
    })
    
 }

 const handleFormSubmit=()=>{
  setIsLoading(true)
  setTimeout(()=>{
    //simulando resposta de uma API
    const response={
      success:true,
      user:{
        email: form.email
      }
    }

    setUser({
      logged: response.success,
      email: response.user.email
    })

    setIsLoading(false)

    navigate("/")

  },3000)


 }

  return(
    <>
        <div>
        <TextField
          onChange={handleInputLogin}
          sx={{mt: '40px'}}
          label="Digite seu mail"
          variant="outlined"
          name='email'
        />
      </div>

      <div>
        <TextField
          onChange={handleInputLogin}
          sx={{mt: '40px'}}
          label=" Digite sua senha"
          variant="outlined"
          name='password'
          type='Password'
        />
      </div>

      <Button
        sx={{mt: '40px'}}
        variant='contained'
        onClick={handleFormSubmit}
        disabled={isLoading}
      >
        {

            isLoading ? 'Aguarde' : 'Entrar'
      
        }
        
      </Button> 

    </>

  )
}

export default Login