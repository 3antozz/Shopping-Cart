import styles from "./Product-Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard({product, onSubmit}) {
    return (
        <div className={styles.card}>
            <Link to={`products/${product.id}`} state={ product } ><img src={product.image} alt={product.title} /></Link>
            <Link to={`products/${product.id}`} state={ product } >{product.title}</Link>
            <div className={styles.info}>
                <h4>{product.price}$</h4>
                <form className={styles.quantity} onSubmit={(event) => onSubmit(event, product.id)}>
                    <label htmlFor="quantity"></label>
                    <input type="number" id="quantity" min={1} defaultValue={1} />
                    <button>Add to Cart</button>
                </form>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
}


