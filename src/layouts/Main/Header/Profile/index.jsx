import { Box, Avatar, IconButton } from '@mui/material'
import avatar from '../../../../assets/avatar.webp'
import React from 'react'

const Profile = () => {
  return (
    <Box>
        <IconButton
            sx={{
                borderRadius: 1,
                backgroundColor: 'grey.200'
            }}
            disableRipple
        >
            <Avatar 
                alt="profile user" 
                src={avatar} 
                sx={{
                    width: 25,
                    height: 25
                }}
            />
        </IconButton>
    </Box>
  )
}

export default Profile