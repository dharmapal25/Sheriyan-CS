import React, { useEffect, useState } from 'react'
import calculator from "../Images/Icons/calculatorr.png"
import gallery from "../Images/Icons/gallery.png"
import mac_os from "../Images/Icons/mac os.png"
import music from "../Images/Icons/music.png"
import Netflix from "../Images/Icons/Netflix.png"
import PS5 from "../Images/Icons/PS5.png"
import recycle from "../Images/Icons/recycle.png"
import vscode from "../Images/Icons/vscode.png"
import terminal from "../Images/Icons/terminall.png"
import setting from "../Images/Icons/setting.png"
import app_store from "../Images/Icons/app store.png"

import "./BottomNav.css"
import Tab from './Tab'


const BottomNav = () => {

    const [tab, setTab] = useState(<Tab />);
    const [arr, setArr] = useState([]);
    const [alt, setAlt] = useState([]);
    
    // elm.target.classList.add("vscode-clicked")
    // elm.target.style.animation = "vscode-clicked 0.5s"
    
    function vscodeFun(name, elm) {
        // let alt = [];
        
        console.log(elm.target.alt)
        // setTab(<Tab />)

        
        if (!alt.includes(name)) {
            let data = [tab, ...arr]
            setArr(data)
            // alt.push(name)
            setAlt([name,...alt])
            console.log("Okey done!")
            console.log(alt)
        }

    }

    return (

        <>

            {arr}

            <div className="bottom-nav">

                <div className="software-icons">

                    <div className="icon-div">
                        <img className="icon" src={mac_os} alt="mac_os" draggable="false" onClick={(e) => vscodeFun("mac_os", e)}  />
                        <img className="icon" src={music} alt="music" draggable="false" onClick={(e) => vscodeFun("music", e)}  />
                        <img className="icon" src={app_store} alt="app_store" draggable="false" onClick={(e) => vscodeFun("app_store", e)}  />
                        <img className="icon" src={gallery} alt="gallery" draggable="false" onClick={(e) => vscodeFun("gallery", e)}  />
                        <img className="icon" src={Netflix} alt="Netflix" draggable="false" onClick={(e) => vscodeFun("Netflix", e)}  />
                        <img className="icon" src={PS5} alt="PS5" draggable="false" onClick={(e) => vscodeFun("PS5", e)}  />
                        <img className="icon" src={setting} alt="setting" draggable="false" onClick={(e) => vscodeFun("setting", e)}  />
                        <img className="icon" src={vscode} alt="vscode" draggable="false" onClick={(e) => vscodeFun("vscode", e)} />
                        <img className="icon" src={calculator} alt="calculator" draggable="false" onClick={(e) => vscodeFun("calculator", e)} />
                        <img className="icon" src={terminal} alt="terminal" draggable="false" onClick={(e) => vscodeFun("terminal", e)}  />
                        <hr className='bar'/>
                        <div className="side-icon">
                            <img className="icon" src={recycle} alt="recycle" draggable="false" onClick={(e) => vscodeFun("recycle", e)}  />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BottomNav