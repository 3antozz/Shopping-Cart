import styles from './Homepage.module.css'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

export default function Homepage () {
    return (
        <div className={styles.homepage}>
            <h1>Welcome to 3ANTOSHOP</h1>
            <Link to='/Shop'><h1>Start Shopping Now</h1></Link>
        </div>
    )
}


Homepage.propTypes = {
    
}