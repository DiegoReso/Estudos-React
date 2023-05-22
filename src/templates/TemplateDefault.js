import { Typography } from "@mui/material"


const TemplateDefault =({title, Component})=>{
  return(
    <Typography variant="h3">
      {title}
      <Component/>
    </Typography>

  )
}

export default TemplateDefault