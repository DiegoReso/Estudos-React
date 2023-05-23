import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState,useEffect } from 'react'
import axios from 'axios'


const RegisterUser=()=>{


const [form,setForm] = useState({
  name:{
    value: '',
    error: false,
    helperText: '',
  },
  job:{
    value: '',
    error: false,
    helperText: '',
  }
})

  


  const handleInputChange = e =>{
    const {name,value} = e.target
    
    setForm({
      ...form,
      [name]:{
        value,
      }
    })
  }


  const handleRegisterButton =()=>{

    let hasError = false
    
    const newFormState = {
      ...form,
    }


    if(!form.name.value){
      hasError = true

      newFormState.name ={
        value: form.name.value,
        error:true,
        helperText: 'Digite o seu nome',
      }
    }



    if(!form.job.value){
      hasError = true
      
      newFormState.job ={
        value: form.job.value,
        error:true,
        helperText: 'Digite a sua função',
      }
    }


    if(hasError){
      return setForm(newFormState) 
    }

    axios.post('https://reqres.in/api/users',{
      name: form.name.value,
      job: form.job.value,
    })
    .then(resp =>console.log(resp))

  }


  return(
    <>
      <div>
        <TextField
          error={form.name.error}
          helperText={form.name.helperText}
          sx={{mt: '40px'}}
          label="Nome"
          variant="outlined"
          name='name'
          value={form.name.value}
          onChange={handleInputChange}
          />
      </div>

      <div>
        <TextField
        error={form.job.error}
        sx={{mt: '40px'}}
        label="Função"
        variant="outlined"
        name='job'
        helperText={form.job.helperText}
        value={form.job.value}
        onChange={handleInputChange}
        />
      </div>

      <Button
        sx={{mt: '40px'}}
        variant='contained'
        onClick={handleRegisterButton}
        >
          Registrar
      </Button> 

    </>
  )
}

export default RegisterUser