import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import HeaderContent from './Content';


const Header = () => {
    
  return (
    <AppBar 
        position='sticky'
        elevation={0}
        sx={{
            backgroundColor: 'transparent'
        }}
    >
        <Toolbar sx={{ p: 3 }}>
            <HeaderContent />
        </Toolbar>
    </AppBar>
  )
}

export default Header
