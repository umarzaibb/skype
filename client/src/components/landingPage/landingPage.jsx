import React from 'react';
import "./LandingPage.css";

function LandingPage() {
    return ( 
        <div className='LandingPageDiv'>
            <nav>
              <p>Apna Video Call</p>
              <div>
                <p>Join as Guest</p>
                <a>Register</a>
                <button>Login</button>
              </div>
            </nav>

            <div className='LandingPageText'>
                <h1><span style={{color: "rgb(255, 119, 0)"}}>Connect</span> with your Loved Ones</h1>
                <p>Cover a distance by apna video call</p>
                <button>Get Started -></button>
            </div>

            <div className='imageVideoCall'>
               <img src='../../public/Adobe_Express_file.png'  />
            </div>
        </div>
     );
}

export default LandingPage;