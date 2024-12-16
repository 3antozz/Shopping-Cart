import styles from "./Checkout-Product.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CheckoutProduct ({product, onChange, onRemove}) {
    const [inputValue, setInputValue] = useState(product.quantity);
    function handleInput (event) {
        console.log("called!");
        setInputValue(event.target.value);
        onChange(event, product.id, +event.target.value);
    }
    return (
        <div className={styles.productCard}>
            <Link to={`/shop/products/${product.id}`} state={ product } ><img src={product.image} alt={product.title} /></Link>
            <Link to={`/shop/products/${product.id}`} state={ product } >{product.title}</Link>
            <h3>Price: {product.price}$</h3>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" min={1} max={100} value={inputValue} onChange={handleInput} />
            <button type="button" onClick={() => onRemove(product.id)}>Remove</button>
            <h3>Total: {(product.price * product.quantity).toFixed(2)}$</h3>
        </div>
    )
}



CheckoutProduct.propTypes = {
    product: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}