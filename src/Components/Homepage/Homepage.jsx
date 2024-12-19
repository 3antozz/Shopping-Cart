import styles from './Homepage.module.css'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

export default function Homepage () {
    return (
        <div className={styles.homepage}>
            <h1>Welcome to <strong style={{color: "red"}}>3ANTOSHOP</strong></h1>
            <Link to='/shop'>Shop Now</Link>
        </div>
    )
}