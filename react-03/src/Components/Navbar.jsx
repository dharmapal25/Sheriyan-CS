import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {

    let data = props.links

    return (
        <>
            <div>

                

                <div className="navbar" style={{ backgroundColor: props.bgcolor }} >
                    <img src={props.logo} alt="logo" className="imgLogo" />

                    <div className="nav">
                        {
                            data.map((e, idx) => {
                                return <p key={idx} > {e} </p>
                            })
                        }

                    </div>
                </div>


            </div>

        </>
    )
}

export default Navbar