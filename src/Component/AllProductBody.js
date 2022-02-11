import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import  "../css/style2.css"
import Footer from './Footer'
import Header from './Header'
import product1 from '../image/product-1.png';
import NoteContext from '../contextApi/NoteContext'
import CategoryComp from './CategoryComp';

function AllProductBody() {
    const Context  = useContext(NoteContext)
    const { AllData } = Context;
    const Category = ["Mobile", "Laptop", "TV", "Headphone", "Smart Watch ", "PenDrive", "Router", "Camera", "Printer", "Monitor"]
    return (
        <>
            <Header />
            <h1 className="heading"> {" "} our <span>products</span>{" "} </h1>
            <h1 className="heading heading2 "> {" "} our <span>products</span>{" "} </h1>
            <div class="navbar2 magic-shadow ">
                        <div class=" flex justify-center">
                            <a href="#" class="active">All Product</a>
                            {Category.map((a)=>  <CategoryComp a={a} />)}
                        
                        </div>
                    </div>
            <div className="features container ">
            <div className=" box-container">
            {AllData.map(data=>{
                  var newstr  = data.name.substring(0,15);
                return(
                    <div className=" box box2 ">
                   
                        <div  className="fas fa-heart" id="cart-btn" />
                       
                    <img src={data.img1} alt="cat 1" />
                    <h3 style={{   maxWidth: "50ch" }}>{newstr}</h3>
                    <h4><span style={{fontWeight: "bold"}}>₹</span>{data.Prize}</h4>
                    <a href="#" className="btn2">
                    add to cart   
                    </a>
                   
                    <Link to={"/product/" + data.id}> <a href="#" className="btn2"> get details</a></Link>
                    
                </div>
                )
            })}
               
              
            </div>
            </div>
            <Footer />
        </>
    )
}

export default AllProductBody