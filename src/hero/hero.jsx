
import "./hero.css"; // Make sure this CSS file is correctly linked
// import heroImage from "./hero-image.png"; // Ensure the image is inside the src folder

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur. In labore atque nihil ab!</p>
                <button className="shop-btn">Shop Now</button>

                <div className="hero-stats">
                    <div>
                        <h3>200+</h3>
                        <p>International brands</p>
                    </div>
                    <div>
                        <h3>2,000+</h3>
                        <p>High-Quality Products</p>
                    </div>
                    <div>
                        <h3>30,000+</h3>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>

            <div className="hero-image">
               <img src="../public/hero.png" alt="" />
            </div>
        </section>
    );
}

export default Hero;


