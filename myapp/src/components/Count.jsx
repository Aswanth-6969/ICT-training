import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var [a, seta] = useState(0)

    const handleInput = (e) => {
        seta(a+1)
    }

    const handleinput = (e) => {
        seta(a-1)
    }


    return (
        <div>
            <Typography variant='h4'>{a}</Typography>
            <Button variant='outlined' onClick={handleInput} >+</Button>
            <Button variant='outlined' onClick={handleinput} >-</Button>
        </div>
  )
}

export default Count