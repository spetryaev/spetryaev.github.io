import './TopBar.scss';
import Box from '@mui/material/Box';
import Header from '../header/Header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Modal, Button, AppBar, Toolbar } from "@mui/material";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HideOnScroll from '../../utils/HideOnScroll';

const styles = {
    display: {
        xs: 'block',
        sm: 'none'
    },
    height: {
        xs: '4rem'
    }
}

function TopBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavMenu = () => {
        setIsOpen(!isOpen);
    }

    const modalStyles = (theme) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none',
            touchAction: 'none',
        },
    })

    return(<>
        <HideOnScroll {...props}>
            <AppBar position="fixed" color="inherit" sx={styles}  elevation={0}>
                <Toolbar>
                <Box sx={{ display: 'contents' }}>
                    <Header/>
                    <Button onClick={toogleNavMenu} sx={{marginLeft: 'auto'}}><MenuRoundedIcon color="action"/></Button>
                </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <Modal
            open={isOpen}
            onClose={toogleNavMenu}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            hideBackdrop
            sx={modalStyles}
        >
            <Slide direction="down" in={isOpen}>
                <Box className="top-bar__menu">
                    <Box className="top-bar__menu_close-button">
                        <Button onClick={toogleNavMenu}><CloseRoundedIcon color="action"/></Button>
                    </Box>
                    <Box className="top-bar__menu_nav">
                        <List>
                            {props.navItems.map((item, index) => (
                                <ListItem sx={{p:0}} key={item.name} onClick={toogleNavMenu}>
                                    <NavLink className={({ isActive }) => (isActive ? 'top-bar__menu_nav_active' : 'top-bar__menu_nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink>
                                </ListItem>
                            ))}
                            <Divider light className="top-bar__menu_divider"/>
                            {props.projectItems.map((item, index) => (
                                <ListItem sx={{p:0}} key={item.name} onClick={toogleNavMenu}>
                                    <NavLink className={({ isActive }) => (isActive ? 'top-bar__menu_nav_active' : 'top-bar__menu_nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink>
                                </ListItem>
                            ))}
                            <Divider light className="top-bar__menu_divider"/>
                            {props.subNavItems.map((item, index) => (
                                <ListItem sx={{p:0}} key={item.name} onClick={toogleNavMenu}>
                                    <NavLink className={({ isActive }) => (isActive ? 'top-bar__menu_nav_active' : 'top-bar__menu_nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Slide>

             
        </Modal>
    </>);
}

export default TopBar;