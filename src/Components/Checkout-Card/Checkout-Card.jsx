import styles from './Checkout-Card.module.css'
import PropTypes from 'prop-types';

export default function CheckoutCard ({total, onClick}) {
    return (
        <div className={styles.card} data-testid="checkout-container">
            <div className={styles.info}>
                <h3>Subtotal:</h3>
                <h3>{total}&nbsp;$</h3>
            </div>
            <div className={styles.info}>
                <h3>Shipping:</h3>
                <h3>Free</h3>
            </div>
            <div className={styles.info}>
                <h2>Total:</h2>
                <h2>{total}&nbsp;$</h2>
            </div>
            <button onClick={onClick}>Checkout</button>
        </div>

    )
}


CheckoutCard.propTypes = {
    total: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}
