import styles from "./Shop.module.css";
import ProductCard from "../Product-Card/Product-Card";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderCircle, Search } from "lucide-react";
export default function Shop() {
    const { products, error, loading, handleAddToCart } = useOutletContext();
    const [popup, setPopup] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filtered, setFiltered] = useState(products || []);

    useEffect(() => {
        if (products) {
            setFiltered(products)
        }
    }, [products]);

    function handleSearch (event) {
        setInputValue(event.target.value);
        if (event.target.value === "") {
            setFiltered(products);
        } else {
            const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
            setFiltered(filteredProducts);
        }
    }

    function handlePopup() {
        setPopup((prev) => [...prev, true]);
        setTimeout(() => {
            setPopup((prev) => {
                const curr = prev.slice();
                curr.pop();
                return curr;
            });
        }, 4000);
    }

    function preventSubmit (event) {
        event.preventDefault();
    }

    if (error)
        return (
            <div className={styles.error}>
                <h1>Oops, an Error has Occured! Please try again later</h1>
            </div>
        );
    if (loading)
        return (
            <div className={styles.loading}>
                <LoaderCircle
                    className={styles.spinner}
                    size={75}
                    color="rgba(255, 0, 0, 0.745)"
                    data-testid="loading-container"
                />
            </div>
        );
    return (
        <div className={styles.shop} data-testid="shop-container">
            <form className={styles.search} onSubmit={preventSubmit}>
                <label htmlFor="search"></label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for a product"
                    value={inputValue}
                    onChange={handleSearch}
                />
                <Search size={24} />
            </form>
            <div className={styles.products}>
                {popup.length > 0 && (
                    <div className={styles.popups}>
                        {popup.map((pop, index) => (
                            <div key={index} className={styles.popup}>
                                Item added to the cart!
                            </div>
                        ))}
                    </div>
                )}

                {filtered.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSubmit={handleAddToCart}
                        handlePopup={handlePopup}
                    />
                ))}
            </div>
        </div>
    );
}

Shop.propTypes = {
    products: PropTypes.object.isRequired,
};
