import styles from "./Checkout-Product.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CheckoutProduct ({product, onChange, onRemove}) {
    const [inputValue, setInputValue] = useState(product.quantity);

    function incrementInput (event) {
        setInputValue((prev) => {
            if (event.target.className === "increment") {
                onChange(event, product.id, prev + 1);
                return +prev + 1;
            } else {
                if (prev > 1) {
                    onChange(event, product.id, prev - 1);
                    return +prev - 1;
                }
                return +prev;
            }
        })
    }
    function handleInput (event) {
        setInputValue(event.target.value);
        onChange(event, product.id, +event.target.value);
    }
    return (
        <div className={styles.productCard} data-testid="product-container">
            <Link to={`/shop/products/${product.id}`} state={ product } ><img src={product.image} alt={product.title} /></Link>
            {/* <h3>Price: {product.price}$</h3> */}
            <div className={styles.input}>
                <Link to={`/shop/products/${product.id}`} state={ product } >{product.title}</Link>
                <div>
                    <h3>Total:&nbsp;{Number((product.price * product.quantity).toFixed(2))}&nbsp;$</h3>
                    <label htmlFor="quantity"></label>
                    <button type="button" onClick={incrementInput}>-</button>
                    <input type="number" id="quantity" min={1} max={100} value={inputValue} onChange={handleInput} />
                    <button type="button" onClick={incrementInput} className="increment">+</button>
                </div>
            </div>
            <button type="button" onClick={() => onRemove(product.id)}>X</button>
        </div>
    )
}



CheckoutProduct.propTypes = {
    product: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}