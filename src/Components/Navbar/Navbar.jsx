import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <nav>
            <div className={styles.links}>
                <Link to='/Home'>Home</Link>
                <Link to='/Shop'>Shop</Link>
            </div>
            <Link to='/Summary'><ShoppingCart size={30} color="black" /></Link>
        </nav>
    );
}
