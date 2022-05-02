import { Box } from '@mui/material';
import useDocumentTitle from '../utils/useDocumentTitle';


const styles = {
    padding: {
        xs: '0',
        sm: '4rem 2.5rem 0 0'
    },
}

function About() {
    useDocumentTitle('About')

    return (<Box sx={styles}>Sergey Petryaev is ...</Box>);
}

export default About;