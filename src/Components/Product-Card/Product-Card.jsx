import styles from "./Product-Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard({product}) {
    return (
        <Link to={`products/${product.id}`} state={ product } className={styles.card}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <div className={styles.info}>
                <h4>{product.price}$</h4>
                <div className={styles.quantity}>
                    <label htmlFor="quantity"></label>
                    <input type="number" id="quantity" />
                </div>
            </div>
            <button>Add to Cart</button>
        </Link>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}


