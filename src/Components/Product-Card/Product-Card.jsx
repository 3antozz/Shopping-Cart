import styles from "./Product-Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductCard({product, onSubmit, handlePopup}) {
    const [inputValue, setInputValue] = useState(1);
    function incrementInput (event) {
        setInputValue((prev) => {
            if (event.target.className === "increment") {
                return +prev + 1;
            } else {
                return prev > 1 ? +prev - 1 : +prev;
            }
        })
    }
    function handleInput (event) {
        setInputValue(event.target.value);
    }
    return (
        <div className={styles.card} data-testid="container">
            <Link to={`products/${product.id}`} state={ product } ><img src={product.image} alt={product.title} /></Link>
            <Link to={`products/${product.id}`} state={ product } >{product.title}</Link>
            <form className={styles.quantity} onSubmit={(event) => onSubmit(event, product.id, +inputValue)}>
                <div className={styles.input}>
                    <h4>{product.price}&nbsp;$</h4>
                    <label htmlFor="quantity"></label>
                    <button type="button" onClick={incrementInput}>-</button>
                    <input type="number" id="quantity" min={1} max={100} value={inputValue} onChange={handleInput} />
                    <button type="button" onClick={incrementInput} className="increment">+</button>
                </div>
                <button type="submit" onClick={handlePopup}>Add to Cart</button>
            </form>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handlePopup: PropTypes.func.isRequired,
}


