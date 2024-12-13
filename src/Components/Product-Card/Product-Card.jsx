import styles from "./Product-Card.module.css";
import PropTypes from "prop-types";

export default function ProductCard({ imgURL, title, price }) {
    return (
        <div className={styles.card}>
            <img src={imgURL} alt={title} />
            <h4>{title}</h4>
            <div className={styles.info}>
                <h4>{price}$</h4>
                <div className={styles.quantity}>
                    <label htmlFor="quantity"></label>
                    <input type="number" id="quantity" />
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    );
}

ProductCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}


