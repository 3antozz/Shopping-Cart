import styles from "./Shop.module.css";
import ProductCard from "../Product-Card/Product-Card";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
export default function Shop() {
    const { products, error, loading } = useOutletContext();

    if (error)
        return <div className={styles.shop}><h1>Oops, an Error has Occured! Please try again later</h1></div>;
    if (loading) return <div className={styles.shop}><h1>Loading Products, Please Wait...</h1></div>;
    return (
        <div className={styles.shop}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

Shop.propTypes = {
    products: PropTypes.object.isRequired,
};
