import React from "react";

import cat1 from '../image/cat-1.png';
import cat2 from '../image/cat-2.png';
import cat3 from '../image/cat-3.png';
import cat4 from '../image/cat-4.png';

function Product_category(){
    return(
        <>
            {/* categories section starts  */}
            <section className="categories" id="categories">
                <h1 className="heading">
                    {" "}
                    product <span>categories</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={cat1} alt="cat 1" />
                        <h3>vegitables</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                    <img src={cat2} alt="cat 2" />
                        <h3>fresh fruits</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={cat3} alt="cat 3" />
                        <h3>dairy products</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                    <div className="box">
                        <img src={cat4} alt="cat 4" />
                        <h3>fresh meat</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">
                            shop now
                        </a>
                    </div>
                </div>
            </section>
            {/* categories section ends */}
        </>
    )
}

export default Product_category