import React from 'react'

function Home(){
    return(
        <div>
            {/* home section starts  */}
            <section className="home" id="home">
                <div className="content">
                    <h3>
                        fresh and <span>organic</span> products for your
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero
                        nostrum veniam facere tempore nisi.
                    </p>
                    <a href="#" className="btn">
                        shop now
                    </a>
                </div>
            </section>
            {/* home section ends */}
        </div>
    )
}

export default Home