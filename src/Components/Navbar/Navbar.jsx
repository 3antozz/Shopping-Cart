import { NavLink } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import styles from './Navbar.module.css'
import PropTypes from 'prop-types';
export default function Navbar({count = 0}) {
    return (
        <nav>
            <NavLink to='/home' className={({ isActive }) => (isActive ? styles.selected : '')}>Home</NavLink>
            <NavLink to='/shop' className={({ isActive }) => (isActive ? styles.selected : '')}>Shop</NavLink>
            <NavLink to='/summary' className={({ isActive }) => (isActive ? styles.selected : '')}><ShoppingCart size={35}/><div><p className={styles.num}>{count}</p></div></NavLink>
        </nav>
    );
}

Navbar.propTypes = {
    count: PropTypes.number,
}