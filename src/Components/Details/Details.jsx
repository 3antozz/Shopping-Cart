import styles from "./Details.module.css";
import PropTypes from "prop-types";
import {useLocation, useOutletContext } from "react-router-dom";
import { Star } from 'lucide-react';
import { useState } from "react";

export default function Details () {
    const { state } = useLocation();
    const { handleAddToCart } = useOutletContext();
    const [inputValue, setInputValue] = useState(1);
    const [popup, setPopup] = useState(false);

    function handlePopup () {
        setPopup(true);
        setTimeout(() => {
            setPopup(false)
        }, 4000)
    }

    function incrementInput (event) {
        setInputValue((prev) => {
            if (event.target.className === "increment") {
                return +prev + 1;
            } else {
                if (prev > 1) {
                    return +prev - 1;
                }
                return +prev;
            }
        })
    }
    function handleInput (event) {
        setInputValue(event.target.value);
    }

    return (
        <div className={styles.detail}>
            <div className={styles.details}>
            {popup && <div className={styles.popup}>Item added to the cart!</div>}
            <img src={state.image} alt={state.title} />
            <div className={styles.right}>
                <h1>{state.title}</h1>
                <h2 className={styles.rating}><Rating rating={state.rating.rate}/> ({state.rating.count})</h2>
                <h2>Price: {state.price}$</h2>
                <h2>Description:</h2>
                <p>{state.description}</p>
                <form className={styles.quantity} onSubmit={(event) => handleAddToCart(event, state.id, +inputValue)}>
                    <div>
                        <label htmlFor="quantity"></label>
                        <button type="button" onClick={incrementInput}>-</button>
                        <input type="number" id="quantity" min={1} max={100} value={inputValue} onChange={handleInput}  />
                        <button type="button" onClick={incrementInput} className="increment">+</button>
                    </div>
                    <button type="submit" onClick={handlePopup}>Add to Cart</button>
                </form>
            </div>
        </div>
        </div>
    )

}

const Rating = ({rating}) => {
    const rate = Math.round(rating);
    let array = [];
    for (let i=0; i < 5; i++) {
        i < rate ? array.push(true) : array.push(false)
    }

    return (
        <div className={styles.star}>
            {array.map((bool, index) => <Star key={index} size={30} color='grey' fill={bool ? "yellow" : "#ffffff00"} />)}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};