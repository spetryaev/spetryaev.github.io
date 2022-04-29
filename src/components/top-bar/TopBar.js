import './TopBar.scss';
import Box from '@mui/material/Box';
import Header from '../header/Header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const styles = {
    display: {
        xs: 'block',
        sm: 'none'
    },
    padding: '12px'
}

function TopBar(props) {
    return(<Box sx={styles} className="top-bar__nav">
        <Header/>
        <List>
            {props.navItems.map((item, index) => (
                <ListItem key={item.name}>
                    <Link to={item.uri} key={item.name}>{item.label}</Link>
                </ListItem>
            ))}
            <Divider light/>
            {props.subNavItems.map((item, index) => (
                <ListItem key={item.name}>
                    <Link to={item.uri} key={item.name}>{item.label}</Link>
                </ListItem>
            ))}
        </List>
    </Box>);
}

export default TopBar;