import { Container, IconButton, Stack } from '@mui/material'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import React from 'react'
import Profile from '../Profile'

const HeaderContent = () => {
  return (
    <Container>
        <Stack 
        spacing={1}
        direction='row' 
        alignItems='center' 
        justifyContent='end'
        sx={{
            color: 'secondary.dark'
        }}
    >
      <IconButton 
        sx={{
          borderRadius: 3,
          backgroundColor: 'grey.100'
      }}
      disableRipple
      >
        <NotificationsRoundedIcon />
      </IconButton>
      <IconButton 
        sx={{
          borderRadius: 1,
          backgroundColor: 'grey.100'
      }}
      disableRipple
      >
        <NotificationsRoundedIcon />
      </IconButton>
        <Profile />
    </Stack>
    </Container>
  )
}

export default HeaderContent