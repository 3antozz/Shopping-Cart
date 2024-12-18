import styles from "./Order-Summary.module.css";
import { useOutletContext } from "react-router-dom";
import CheckoutProduct from "../Checkout-Product/Checkout-Product";
import CheckoutCard from "../Checkout-Card/Checkout-Card";
import { LoaderCircle } from 'lucide-react';
import { useState } from "react";
export default function Summary () {
    const { products, error, loading, cartIDs, handleAddToCart, removeProduct, clearCart } = useOutletContext();
    const [popup, setPopup] = useState(false);

    function handlePopup () {
        clearCart()
        setPopup(true);
        setTimeout(() => {
            setPopup(false)
        }, 4000)
    }
    const cartObj = {};
    let total = 0;
    cartIDs.forEach((prod) => {
        cartObj[prod.id] = prod.quantity
    });

    if (!products) {
    return <div className={styles.empty}><LoaderCircle className={styles.spinner} size={75} color="rgba(255, 0, 0, 0.745)"/></div>
    }
    const cartProducts = products.reduce((result, product) => {
        if (cartObj[product.id] !== undefined) {
            result.push({...product, quantity: cartObj[product.id]})
            total += (product.price * cartObj[product.id]);
        }
        return result;
    }, []);
    if (cartIDs.length === 0) {
        return <div className={styles.empty}>
                    <h1>Your cart is empty :D !</h1>
                    {popup && <div className={styles.popup}>Checkout Complete. Thank you for your purchase!</div>}
                </div>
    }
    if (error)
        return <div className={styles.summary}><h1>Oops, an Error has Occured! Please try again later</h1></div>;
    if (loading) return (<div className={styles.summary}><h1>Loading Products, Please Wait...</h1></div>);
    return (
        <div className={styles.summary}>
            <div className={styles.products}>
                {cartProducts.map((product) => <CheckoutProduct key={product.id} product={product} onChange={handleAddToCart} onRemove={removeProduct}/>)}
            </div>
            <CheckoutCard total={Number(total.toFixed(2))} onClick={handlePopup} />
        </div>
    )
}