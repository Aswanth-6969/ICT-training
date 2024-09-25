import { Button, TextField, withTheme } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <TextField variant='outlined' color="secondary" label="name" focused /><br /><br />
          <TextField variant='outlined' color="secondary" label="age" focused /><br /><br />
          <TextField variant='outlined' color="secondary" label="phone" focused /><br /><br />
          <Button variant='contained'>Submit</Button>
      </div>
  )
}

export default Signup