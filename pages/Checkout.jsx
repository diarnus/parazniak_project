import { Link, useNavigate } from "react-router-dom";
import { HOME } from "../utils/const";
import { CART } from "../utils/const";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { a } from "../services/axiosInstance";

function Checkout() {
  const { clearCart, totalPrice, cartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Almaty",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Зачаруйте все поля");
      return;
    }
    if (cartItems.length === 0) { // ✅ исправлено lenght -> length
      alert("Ваша волшебная корзина пуста");
      navigate(HOME);
      return;
    }

    setIsSubmitting(true);

    const orderTimestamp = new Date().toISOString();
    const orderData = {
      customer: formData,
      items: cartItems,
      totalPrice: totalPrice,
      orderTimestamp: orderTimestamp,
    };

    try {
      const res = await a.post("/orders", orderData);
      alert(`Сова уже в пути! Сумма: ${totalPrice.toLocaleString()}тенге, Номер заказа: ${res.data.id}`);
      clearCart();
      navigate(HOME);
    } catch (error) {
      console.error("Error: ", error);
      alert("Магии не случилось");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="block">
      <div className="container">
        <Link to={CART} className="back-btn">Назад</Link>
        <h1 className="title">Оформление заказа</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label">Ваше имя</label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              type="text"
              name="name"
              placeholder="Введите имя"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="label">Номер телефона</label>
            <input
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
              pattern="\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}"
              type="text"
              name="phone"
              placeholder="Введите номер телефона: +7 XXX XXX XX XX"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="address" className="label">Напишите адрес</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Введите адрес, дом, квартиру, домофон"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="city" className="label">Укажите город</label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              disabled={isSubmitting}
            >
              <option value="Алматы">Алматы</option>
              <option value="Астана">Астана</option>
              <option value="Атлантида">Атлантида</option>
              <option value="Эльдорадо">Эльдорадо</option>
              <option value="Шамбала">Шамбала</option>
              <option value="Асгард">Асгард</option>
              <option value="Олимп">Олимп</option>
              <option value="Валинор">Валинор</option>
              <option value="Мордор">Мордор</option>
              <option value="Гондор">Гондор</option>
              <option value="Ривенделл">Ривенделл</option>
              <option value="Камелот">Камелот</option>
              <option value="Авалон">Авалон</option>
              <option value="Лапута">Лапута</option>
              <option value="Хогсмид">Хогсмид</option>
              <option value="Хогвартс">Хогвартс</option>
              <option value="Город Эхо">Город Эхо</option>
              <option value="Зион">Зион</option>
              <option value="Нумения">Нумения</option>
              <option value="Небесный Предел">Небесный Предел</option>
              <option value="Анк-Морпорк">Анк-Морпорк</option>
            </select>
          </div>
          <button className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? "Заказ оформляется" : "оформить заказ"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
