import React from 'react'
import './Home.css'
import girl from "../images/boy.jpg"
import ipads from "../images/ipads.jpg"
import iphone from "../images/iphone.jpg"
function Home() {
    return (
        <div className='container' >

            <div className="items">

                <div className="side-items">

                    <div className='side'>
                        <img className='ipads' src={ipads} alt="ipads" />
                    </div>

                    <div className='side'>
                        <img className='iphone' src={iphone} alt="iphone" />
                    </div>

                </div>

                <div className="outer">
                    <div className='sideout1'>
                        <h1 className="main-text">
                            Buy your perfect <br /> domain name
                        </h1>

                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus corporis perferendis laboriosam amet.
                        </p>
                        <div className="input">

                            <input type="text" placeholder='Type the domain you want' />
                            <p className="search">Search</p>
                        </div>

                    </div>
                    <div className='sideout2'>
                        <img className='boy' src={girl} alt="girl" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home