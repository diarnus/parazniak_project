import { useCart } from "../../context/CartContext";

function ProductItem({ product }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);
  }

  const specialImageUrl = "https://media.dodostatic.net/image/r:584x584/11ee7d5fbbe6df578028ae62afd05f52.avif";
  
  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: product.image === specialImageUrl ? "50px" : "20px",
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3 className="product-item__title">{product.name}</h3>
      <p className="product-item__description">{product.description}</p>
      <p className="product-item__description">{product.category}</p>
      <div className="product-item__action">
        <strong className="product-item__title">{product.price.toLocaleString()} &#8376;</strong>
        <button className="add-button" onClick={handleAddToCart}>В корзину</button>
      </div>
    </div>
  );
}

export default ProductItem;
