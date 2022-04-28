import './SideBar.scss';
import Header from '../header/Header';

var navItems = [
    {
        "name": "story",
        "label": "Story",
        "uri": "#story"
    },
    {
        "name": "characterDesign",
        "label": "Character Design",
        "uri": "#chardesign"
    },
    {
        "name": "illustration",
        "label": "Illustration",
        "uri": "#illustration"
    },
    {
        "name": "about",
        "label": "About Me",
        "uri": "#about"
    },
    {
        "name": "cv",
        "label": "CV",
        "uri": "#cv"
    }

];

navItems = navItems.map(item => {
    return <li key={item.name}><a href={item.uri} key={item.name}>{item.label}</a></li>
})

function SideBar() {
    
    return (
        <div className="side-bar">
            <Header></Header>
            <ul className="nav">
                {navItems}
            </ul>
        </div>
    );
}

export default SideBar;