import React from "react";

function Footer(){
    return(
        <React.Fragment>
            {/* footer section starts  */}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>
                            {" "}
                            groco <i className="fas fa-shopping-basket" />{" "}
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
                            saepe.
                        </p>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f" />
                            <a href="#" className="fab fa-twitter" />
                            <a href="#" className="fab fa-instagram" />
                            <a href="#" className="fab fa-linkedin" />
                        </div>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-phone" /> +123-456-7890{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-phone" /> +111-222-3333{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-envelope" /> shaikhanas@gmail.com{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> mumbai, india - 400104{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> home{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> features{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> products{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> categories{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> review{" "}
                        </a>
                        <a href="#" className="links">
                            {" "}
                            <i className="fas fa-arrow-right" /> blogs{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <input type="email" placeholder="your email" className="email" />
                        <input type="submit" defaultValue="subscribe" className="btn" />
                        <img src="image/payment.png" className="payment-img" alt="" />
                    </div>
                </div>
                <div className="credit">
                    {" "}
                    created by <span> Subham, Sohom, koushik </span> | all rights reserved{" "}
                </div>
            </section>
            {/* footer section ends */}
        </React.Fragment>
    )
}

export default Footer 