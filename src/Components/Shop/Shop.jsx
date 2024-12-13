import styles from "./Shop.module.css";
import ProductCard from "../Product-Card/Product-Card";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
export default function Shop() {
    const { products, error } = useOutletContext();
    if (error)
        return <h1>Oops, an Error has Occured! Please try again later</h1>;
    return (
        <div className={styles.shop}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    imgURL={product.image}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
}

Shop.propTypes = {
    products: PropTypes.object.isRequired,
};
