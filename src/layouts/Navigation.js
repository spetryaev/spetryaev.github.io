//import logo from './logo.svg';
import SideBar from '../components/side-bar/SideBar';
import TopBar from '../components/top-bar/TopBar';

import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Lightbox from '../components/lightbox/Lightbox';

const data = {
    nav: [
            {
                "name": "animation",
                "label": "Animation",
                "uri": "animation"
            },
            {
                "name": "story",
                "label": "Story",
                "uri": "story"
            },
            {
                "name": "characterDesign",
                "label": "Character Design",
                "uri": "character-design"
            },
            {
                "name": "illustration",
                "label": "Illustration",
                "uri": "illustration"
            }
    ],
    subnav: [
        {
            "name": "about",
            "label": "About Me",
            "uri": "about"
        },
        {
            "name": "cv",
            "label": "CV",
            "uri": "cv"
        }
    ]
}

function Navigation() {
  return (
        <>
            <TopBar navItems={data.nav} subNavItems={data.subnav}></TopBar>
            
            <Box sx={{ display: 'flex' }}>
                <SideBar navItems={data.nav} subNavItems={data.subnav}></SideBar>
                <Outlet/>
            </Box>
            
            <Lightbox/>
        </>
  );
}

export default Navigation;
