import { Box } from '@mui/material'
import React from 'react'
import MiniDrawer from './Drawer'
import AppBar from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  }

  const openDrawer = () => {
    setDrawer(true);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer open={drawer} toggleDrawer={toggleDrawer} />
      <Box sx={{ width: '100%' }}>
        <AppBar open={drawer} toggleDrawer={toggleDrawer} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout