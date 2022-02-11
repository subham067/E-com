import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import '../css/Login.css'

function Login() {
    return (
        <>
          <Header/>
            <div className="main-w3layouts wrapper">
            <h1 className="heading mt-7">
                    {" "}
                    please <span>Login</span>{" "}
                </h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form>                          
                        <label for="text" className='labelText' style={{fontSize:"2rem"}}>Your Email</label>
                            <input
                                className="text" style={{color:"#fff"}}
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                               <label for="text" className='labelText' style={{fontSize:"2rem"}}>Your Password</label>
                            
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
                            Are you New? <a href="#"> Register Now!</a>
                        </p>
                    </div>
                </div>
                {/* copyright */}
                
                {/* //copyright */}
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

export default Login