import React, { useEffect, useState } from 'react'
import calculator from "../Images/Icons/calculator.png"
import gallery from "../Images/Icons/gallery.png"
import mac_os from "../Images/Icons/mac os.png"
import music from "../Images/Icons/music.png"
import Netflix from "../Images/Icons/Netflix.png"
import PS5 from "../Images/Icons/PS5.png"
import recycle from "../Images/Icons/recycle.png"
import vscode from "../Images/Icons/vscode.png"
import terminal from "../Images/Icons/terminal.png"
import setting from "../Images/Icons/setting.png"
import app_store from "../Images/Icons/app store.png"

import "./BottomNav.css"
import Tab from './Tab'


const BottomNav = () => {

    const [tab, setTab] = useState(null);

    // elm.target.classList.add("vscode-clicked")
    // elm.target.style.animation = "vscode-clicked 0.5s"

    function vscodeFun(name, elm) {

        console.log(elm.target.alt)
        console.log(elm.target.alt)
        setTab(<Tab />)
    }

    function calcFun(name, elm) {

        console.log(elm.target.alt)
        console.log(elm.target.alt)
        setTab(<Tab />)
    }




    return (
        <>

            {tab}

            <div className="bottom-nav">

                <div className="software-icons">

                    <div className="icon-div">
                        <img className="icon" src={mac_os} alt="" draggable="false" />
                        <img className="icon" src={music} alt="" draggable="false" />
                        <img className="icon" src={app_store} alt="" draggable="false" />
                        <img className="icon" src={gallery} alt="" draggable="false" />
                        <img className="icon" src={Netflix} alt="" draggable="false" />
                        <img className="icon" src={PS5} alt="" draggable="false" />
                        <img className="icon" src={setting} alt="" draggable="false" />
                        <img className="icon" src={vscode} alt="vscode" draggable="false" onClick={(e) => vscodeFun("vscode", e)} />
                        <img className="icon" src={calculator} alt="calculator" draggable="false" onClick={(e) => calcFun("calculator", e)} />
                        <img className="icon" src={terminal} alt="" draggable="false" />
                        <hr />
                        <div className="side-icon">
                            <img className="icon" src={recycle} alt="" draggable="false" />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BottomNav