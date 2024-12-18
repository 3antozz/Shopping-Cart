import styles from "./Shop.module.css";
import ProductCard from "../Product-Card/Product-Card";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { LoaderCircle } from 'lucide-react';
export default function Shop() {
    const { products, error, loading, handleAddToCart } = useOutletContext();
    const [popup, setPopup] = useState([]);

    function handlePopup () {
        setPopup((prev) => [...prev, true]);
        setTimeout(() => {
            setPopup((prev) => {
                const curr = prev.slice();
                curr.pop();
                return curr;
            });
        }, 4000)
    }

    if (error)
        return <div className={styles.error}><h1>Oops, an Error has Occured! Please try again later</h1></div>;
    if (loading) return <div className={styles.loading}><LoaderCircle className={styles.spinner} size={75} color="rgba(255, 0, 0, 0.745)"/></div>;
    return (
        <div className={styles.shop}>
            {popup.length > 0 &&
            <div className={styles.popups}>
                {popup.map((pop, index) => <div key={index} className={styles.popup}>Item added to the cart!</div>)} 
            </div>}
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onSubmit={handleAddToCart}
                    handlePopup={handlePopup}
                />
            ))}
        </div>
    );
}

Shop.propTypes = {
    products: PropTypes.object.isRequired,
};
