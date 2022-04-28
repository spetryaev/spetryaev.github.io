import { useRef, useEffect } from 'react'
import useDocumentTitle from '../utils/useDocumentTitle';

function About() {
    useDocumentTitle('About')
    
    return (<div>Sergey Petryaev is ...</div>);
}

export default About;