'use client';
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Header() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" className='logo' component="a" noWrap href="/" sx={{ marginLeft: 20 }} >
              ERD Studio
            </Typography>


            <Box sx={{ flexGrow: 1 }}>
              <Button className='button-green' sx={{color: 'black', marginLeft:2}}>
                test2
              </Button>
            </Box>

            <Box sx={{ marginRight: 20 }}>
              <Button className='button-green' color="inherit">로그인</Button>
              <Button color="inherit">회원가입</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div >
  );
}
