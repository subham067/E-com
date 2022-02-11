import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/Register.css'

function Register() {
    return (
        <>

           <Header/>
            <div className="main-w3layouts wrapper">
            <h1 className="heading mt-7">
                    {" "}
                    please  <span>Register</span>{" "}
                </h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form>
                            <label for="text" className='labelText' style={{fontSize:"2rem"}}>Full Name</label>
                            <input
                                className="text"
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                required=""
                            />
                            
                            <label for="text" className='labelText' style={{fontSize:"2rem"}}>Enter Email</label>
                            <input
                                className="text" style={{color:"#fff"}}
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                              <label for="text" className='labelText' style={{fontSize:"2rem"}}> Mobile Number</label>
                           
                            <input
                                className="text"
                                type="number"
                                name="mobile"
                                placeholder="Mobile Number"
                                required=""
                            />
                           <label for="text" className='labelText' style={{fontSize:"2rem"}}> password</label>
                            <input
                                className="text "
                                type="password"
                                name="password"
                                placeholder="Password"
                                required=""
                            />
                            <div className="wthree-text">
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" required="" />
                                    <span style={{color:"black"}}>I Agree To The Terms &amp; Conditions</span>
                                </label>
                                <div className="clear"> </div>
                            </div>
                            <input type="submit" defaultValue="SIGNUP" />
                        </form>
                        <p style={{color:"black"}}>
                            Don't have an Account? <a href="#"> Login Now!</a>
                        </p>
                    </div>
                </div>
              
                <ul className="colorlib-bubbles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
            {/* //main */}
            <Footer/>
        </>

    )
}

export default Register