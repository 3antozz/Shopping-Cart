import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import styles from './Navbar.module.css'
import PropTypes from 'prop-types';
export default function Navbar({count = 0}) {
    return (
        <nav>
            <div className={styles.links}>
                <Link to='/Home'>Home</Link>
                <Link to='/Shop'>Shop</Link>
            </div>
            <Link to='/Summary'><ShoppingCart size={35}/><div><p className={styles.num}>{count}</p></div></Link>
        </nav>
    );
}

Navbar.propTypes = {
    count: PropTypes.number,
}