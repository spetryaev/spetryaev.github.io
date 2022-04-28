import './SideBar.scss';
import Header from '../header/Header';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


const navItems = [
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
];

const subNavItems = [
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

function SideBar() {
    
    return (
        <div className="side-bar">
            <Header></Header>
            <ul className="nav">
                {navItems.map((item, index) => (
                    <li key={item.name}><Link to={item.uri} key={item.name}>{item.label}</Link></li>
                ))}
                <Divider light/>
                {subNavItems.map((item, index) => (
                    <li key={item.name}><Link to={item.uri} key={item.name}>{item.label}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;