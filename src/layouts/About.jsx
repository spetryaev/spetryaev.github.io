import { Box } from '@mui/material';
import useDocumentTitle from '../utils/useDocumentTitle';


const styles = {
    padding: {
        xs: '0 1rem',
        sm: '4rem 2.5rem 0 0'
    },
}

function About() {
    useDocumentTitle('About')

    return (<Box sx={styles}>
                <p>Sergey Petryaev is a freelance illustrator and animator. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Box>);
}

export default About;