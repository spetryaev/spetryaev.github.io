import './TopBar.scss';
import Box from '@mui/material/Box';
import Header from '../header/Header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Modal, Button, AppBar, Toolbar } from "@mui/material";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const styles = {
    display: {
        xs: 'block',
        sm: 'none'
    },
    padding: '12px'
}

function TopBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavMenu = () => {
        setIsOpen(!isOpen);
    }

    const modalStyles = (theme) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    })

    return(<Box sx={styles} className="top-bar__nav">
        <AppBar position="fixed" color="inherit">
            <Toolbar>
            <Box sx={{ display: 'contents' }}>
                <Header/>
                <Button onClick={toogleNavMenu} sx={{marginLeft: 'auto'}}><MenuRoundedIcon color="action"/></Button>
            </Box>
            </Toolbar>
        </AppBar>

        

        <Modal
            open={isOpen}
            onClose={toogleNavMenu}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            hideBackdrop
        >
            <Slide direction="down" in={isOpen}>
                <Box className="top-bar__menu" sx={modalStyles}>
                    <Box sx={{float: 'right', p: '12px'}}>
                        <Button onClick={toogleNavMenu}><CloseRoundedIcon color="action"/></Button>
                    </Box>
                    <List>
                        {props.navItems.map((item, index) => (
                            <ListItem key={item.name} onClick={toogleNavMenu}>
                                <Link to={item.uri} key={item.name}>{item.label}</Link>
                            </ListItem>
                        ))}
                        <Divider light/>
                        {props.subNavItems.map((item, index) => (
                            <ListItem key={item.name} onClick={toogleNavMenu}>
                                <Link to={item.uri} key={item.name}>{item.label}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Slide>

             
        </Modal>
    </Box>);
}

export default TopBar;