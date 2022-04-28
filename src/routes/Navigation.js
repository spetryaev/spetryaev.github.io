//import logo from './logo.svg';
import SideBar from '../components/side-bar/SideBar';
import TopBar from '../components/top-bar/TopBar';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Outlet } from 'react-router-dom';


const drawerWidth = 240;

function Navigation() {
  return (
        <Box>
            <TopBar></TopBar>
                <Box sx={{ display: 'flex' }}>
                <Drawer
                    sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: 'none'
                    }
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <SideBar></SideBar>
                </Drawer>

                <Outlet/>

                </Box>
        </Box>
  );
}

export default Navigation;
