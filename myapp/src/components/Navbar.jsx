import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div>
          <AppBar color="" >
              <Toolbar>
                  <Typography variant="h6">My App</Typography>
                  <Link to={"/"}>
                      <Button variant='contained' color='inherit'>Home</Button>
                  </Link>
                  <Link to={"/l"}>
                      <Button variant='contained' color='inherit'>Login</Button>
                  </Link>
                  <Link to={"/s"}>
                      <Button variant='contained' color='inherit'>Signup</Button>
                  </Link>
                  <Link to={"/state"}>
                      <Button variant='contained' color='inherit'>State</Button>
                  </Link>
                  <Link to={"/count"}>
                      <Button variant='contained' color='inherit'>Count</Button>
                  </Link>
                  <Link to={"/api"}>
                      <Button variant='contained' color='inherit'>Api</Button>
                  </Link>
                  <Link to={"/pokemon"}>
                      <Button variant='contained' color='inherit'>Pokemon</Button>
                  </Link>
              </Toolbar>
          </AppBar>
          
      </div>
  )
}
