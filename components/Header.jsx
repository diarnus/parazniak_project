import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { CART } from "../utils/const";
import { useCart } from "../context/CartContext";

function Header() {

    const {totalQuantity} = useCart();

    return (
        <header className="header">
        <div className="container header-flex">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span className="logo-text">паражняк</span>
            </div>
            <Link to={CART} className="cart-button">Корзина : {totalQuantity}</Link>
        </div>
    </header>
    );
}

export default Header;