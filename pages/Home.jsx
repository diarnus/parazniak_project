import slideOne from "../assets/images/home/1.png";
import slideTwo from "../assets/images/home/2.jpeg";
import slideThree from "../assets/images/home/3.jpeg";
import slideFour from "../assets/images/home/4.jpeg";
import slideFive from "../assets/images/home/5.jpeg";
import ProductsList from "../components/Products/ProductsList";

function Home() {
    return (
        <>
            <section className="block">
                <div className="container">
                    <h1 className="title" style={{ color: 'white' }}>Добро Пожаловать в паражняковый магаз</h1>
                    <div className="stories-list">
                        <img src={slideOne} alt="Фокус 1" />
                        <img src={slideTwo} alt="Фокус 2" />
                        <img src={slideThree} alt="Фокус 3" />
                        <img src={slideFour} alt="Фокус 4" />
                        <img src={slideFive} alt="Фокус 5" />
                    </div>
                </div>
            </section>
            <section className="block">
                <div className="container">
                    <h2 className="title" style={{ color: 'white' }}>Магический реквизит</h2>
                    <ProductsList />
                </div>
            </section>
        </>
    );
}

export default Home;