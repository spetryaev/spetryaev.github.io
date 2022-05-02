//import logo from './logo.svg';
import SideBar from '../components/side-bar/SideBar';
import TopBar from '../components/top-bar/TopBar';

import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Lightbox from '../components/lightbox/Lightbox';

const data = {
    navItems: [
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
    projectItems: [
        {
            "name": "mermaidMusician",
            "label": "Mermaid Musician",
            "uri": "projects/mermaid-musicial"
        },
        {
            "name": "deanaStickers",
            "label": "Deana Stickers",
            "uri": "projects/deana-stickers"
        },
        
    ],
    subNavItems: [
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

function Main() {
    const contentStyles = (theme) => ({
        [theme.breakpoints.down('sm')]: {
            paddingTop: '4rem'
        }
    });
  return (
        <>
            <TopBar {...data}></TopBar>
            
            <Box sx={{ display: 'flex' }}>
                <SideBar {...data}></SideBar>
                <Box sx={contentStyles}>
                    <Outlet/>
                </Box>
            </Box>
            
            <Lightbox/>
        </>
  );
}

export default Main;
