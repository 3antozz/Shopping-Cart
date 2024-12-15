import styles from "./Details.module.css";
import PropTypes from "prop-types";
import {useLocation } from "react-router-dom";

export default function Details () {
    const { state } = useLocation();
    // const { products } = useOutletContext();
    // const {productId} = useParams();
    // const product = products.find((element) => element.id === +productId);
    // console.log(product);
    return (
        <div className={styles.details}>
            <div className={styles.left}>
                <img src="" alt="" />
            </div>
            <div className={styles.right}>
                <h2>{state.title}</h2>
            </div>
        </div>
    )

}

Details.propTypes = {
    products: PropTypes.object.isRequired,
};