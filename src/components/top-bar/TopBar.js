import Box from '@mui/material/Box';
import Header from '../header/Header';

const styles = {
    display: {
        xs: 'block',
        sm: 'none'
    },
    padding: '12px'
}

function TopBar() {
    return(<Box sx={styles}>
        <Header/>
    </Box>);
}

export default TopBar;