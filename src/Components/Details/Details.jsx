import styles from "./Details.module.css";
import PropTypes from "prop-types";
import {useLocation, useOutletContext } from "react-router-dom";
import { Star } from 'lucide-react';

export default function Details () {
    const { state } = useLocation();
    const { handleAddToCart } = useOutletContext();
    // const { products } = useOutletContext();
    // const {productId} = useParams();
    // const product = products.find((element) => element.id === +productId);
    // console.log(product);
    return (
        <div className={styles.details}>
            <img src={state.image} alt={state.title} />
            <div className={styles.right}>
                <h1>{state.title}</h1>
                <h2 className={styles.rating}><Rating rating={state.rating.rate}/> ({state.rating.count})</h2>
                <h2>Price: {state.price}$</h2>
                <h2>Description:</h2>
                <p>{state.description}</p>
                <form className={styles.quantity} onSubmit={(event) => handleAddToCart(event, state.id)}>
                    <label htmlFor="quantity"></label>
                    <input type="number" id="quantity" min={1} defaultValue={1} />
                    <button>Add to Cart</button>
                </form>
            </div>
        </div>
    )

}

const Rating = ({rating}) => {
    const rate = Math.round(rating);
    let array = [];
    for (let i=0; i < 6; i++) {
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