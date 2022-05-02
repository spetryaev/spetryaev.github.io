import './SideBar.scss';
import Header from '../header/Header';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';

function SideBar(props) {
    const drawerWidth = 240;

    return (
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
                <div className="side-bar">
                    <Header></Header>
                    <List className="side-bar__nav">
                        {props.navItems.map((item, index) => (
                            <ListItem key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        ))}
                        <Divider light className="side-bar__nav_divider"/>
                        {props.projectItems.map((item, index) => (
                            <ListItem key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        ))}
                        <Divider light className="side-bar__nav_divider"/>
                        {props.subNavItems.map((item, index) => (
                            <ListItem key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
    );
}

export default SideBar;