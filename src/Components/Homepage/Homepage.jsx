import styles from './Homepage.module.css'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

export default function Homepage () {
    return (
        <div className={styles.homepage}>
            <h1>Welcome to <h1 style={{color: "red"}}>3ANTOSHOP</h1></h1>
            <Link to='/shop'><h1>Shop Now</h1></Link>
        </div>
    )
}


Homepage.propTypes = {
    
}