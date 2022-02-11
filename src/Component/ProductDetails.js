import React, { useRef, useState, useContext, useEffect } from "react";
import Footer from './Footer'
import Header from './Header'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import NoteContext from '../contextApi/NoteContext'



function ProductDetails({ data }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const Context = useContext(NoteContext)
    const { pData } = Context;
    const Array = {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },
        // centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 4,
            },
        },
    }
    useEffect(()=>{
        console.log("subhaq,m");
    },[])
    return (
        <>
            <Header />

            <div className="container">
                <h1 className="heading mt-7">
                    {" "}
                    Product <span>details</span>{" "}
                </h1>
                <div className="row pDaidel">
                    <div className="col-sm-12 col-lg-6">

                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 imgSlider2"
                        >
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img1} />
                            </SwiperSlide>
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img2} />
                            </SwiperSlide>
                            <SwiperSlide className="imgSliderdiv">
                                <img src={data.img3} />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper ImgSlider"
                        >
                            <SwiperSlide>
                                <img src={data.img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={data.img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={data.img3} />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="col-sm-12 col-lg-6 position-relative">
                        <h2 className="mt-5 w-75">{data.name}</h2>
                        <h1 className="mt-5 text-bold">₹ {data.Prize}</h1>
                        <h4 className="mt-5 w-75">
                            {data.Desc}
                        </h4>
                        <div className="btnAll"> <a href="#" className="btn">
                            add to cart
                        </a>
                            <a href="#" className="btn mx-5">
                                Order Now
                            </a></div>

                    </div>

                </div>
            </div>
            <section className="products" id="products">
                <h1 className="heading">
                    {" "}
                    Releted <span>products</span>{" "}
                </h1>
                <Swiper
                    {...Array}
                    slidesPerView={4}
                    className="mySwiper  product-slider"
                >
                    {pData.map((d) => {
                        if (d.Category === data.Category) {
                            var newstr = d.name.substring(0, 15);
                            return (
                                <SwiperSlide className="swiper-slide  box box2">


                                    <div className="fas fa-heart" id="cart-btn" />

                                    <img src={d.img1} alt="cat 1" />
                                    <h3 style={{ maxWidth: "50ch" }}>{newstr}</h3>
                                    <h4><span style={{ fontWeight: "bold" }}>₹</span>{d.Prize}</h4>
                                    <a href="#" className="btn2">
                                        add to cart
                                    </a>

                                    <Link to={"/product/" + d.id}> <a href="#" className="btn2"> get details</a></Link>


                                </SwiperSlide>
                            )
                        }
                    })}


                </Swiper>
            </section>
            {/* <div className=" box box2 ">
                   
    <div  className="fas fa-heart" id="cart-btn" />
   
<img src={data.img1} alt="cat 1" />
<h3 >{data.name}</h3>
<h4><span style={{fontWeight: "bold"}}>₹</span>{data.Prize}</h4>
<a href="#" className="btn2">
add to cart   
</a>
<a href="#" className="btn2">
get details
</a>
</div> */}
            <Footer />
        </>
    )
}

export default ProductDetails;