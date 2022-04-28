import { Link } from 'react-router-dom';
import './Header.scss';


function Header() {
    return (
        <div className="header">
            <Link to="/">Sergey Petryaev</Link>
        </div>
        );
}

export default Header;