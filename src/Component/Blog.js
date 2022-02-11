import React from "react";

import blog1 from '../image/blog-1.jpg';
import blog2 from '../image/blog-2.jpg';
import blog3 from '../image/blog-3.jpg';
import Blog_sub from "./Blog_sub";

function Blog(){
    const Data = [
        {
            image: blog1,
            name: "by User",
            time: "01-01-2022",
            title: "Fresh And Organic Vegitables And Fruits",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        },
        {
            image: blog2,
            name: "by User",
            time: "01-01-2022",
            title: "Fresh And Organic Vegitables And Fruits",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        },
        {
            image: blog3,
            name: "by User",
            time: "01-01-2022",
            title: "Fresh And Organic Vegitables And Fruits",
            desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita",
            Read_More: ""
        }]
    return(
        <>
        {/* blogs section starts  */}
        <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    our <span>blogs</span>{" "}
                </h1>
                <div className="box-container">
                    {Data.map(d=>{
                        return(
                            <Blog_sub d={d}/>
                        )
                    })}
                    
                </div>
            </section>
            {/* blogs section ends */}
        </>
    )
}

export default Blog