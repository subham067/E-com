import React from "react";

import featureimage1 from '../image/feature-img-1.png';
import featureimage2 from '../image/feature-img-2.png';
import featureimage3 from '../image/feature-img-3.png';

function Feature() {
    return (
        <>
            <section className="features" id="features">
                <h1 className="heading">
                    {" "}
                    our <span>features</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src={featureimage1} alt="feature image" />
                        <h3>fresh and organic</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="box">
                        <img src={featureimage2} alt="feature image 2" />
                        <h3>free delivery</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                    <div className="box">
                        <img src={featureimage3} alt="feature image 3" />
                        <h3>easy payments</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                            earum!
                        </p>
                        <a href="#" className="btn">
                            read more
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature