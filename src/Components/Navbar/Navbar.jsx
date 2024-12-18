import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import styles from './Navbar.module.css'
import PropTypes from 'prop-types';
export default function Navbar({count = 0}) {
    return (
        <nav>
            <div className={styles.links}>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
            </div>
            <Link to='/home' className={styles.brand}>3antoshop</Link>
            <Link to='/summary'><ShoppingCart size={35}/><div><p className={styles.num}>{count}</p></div></Link>
        </nav>
    );
}

Navbar.propTypes = {
    count: PropTypes.number,
}