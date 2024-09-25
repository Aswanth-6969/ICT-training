import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const StateBasics = () => {
    var [fname, setfname] = useState("Welcome Washington")
    var [lname, setlname] = useState("Welcome Harry")
    
    const handleInput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }

    const handleinput = () => {
        setlname(fname)
    }
    

  return (
      <div>
          <Typography variant='h4'>{lname} <br />{fname}</Typography>
          <TextField variant='outlined' onChange={handleInput} /><br /><br />
          <Button variant='outlined' onClick={handleinput} >Submit</Button>
      </div>
  )
}

export default StateBasics