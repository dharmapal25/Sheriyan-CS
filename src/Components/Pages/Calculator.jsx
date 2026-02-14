import React, { useState } from 'react'
import "./Calculator.css"
const Calculator = () => {

    const [num, setNum] = useState(null);
    const [input, setInput] = useState(0);

    return (
        <>
            <div className='calt-main-div' >

                <div className="calt-text-div">
                    <div className="input">
                        <p> { num } </p>
                    </div>
                </div>

                <div className="calt-div">

                    <div className="calt-opr">
                        <button className="btn">/</button>
                        <button className="btn">X</button>
                        <button className="btn">-</button>
                        <button className="btn">+</button>
                        <button className="btn">=</button>
                    </div>

                    <div className="calt-num">
                        <button className="btn-num">C</button>
                        <button className="btn-num">%</button>
                        <button className="btn-num">%</button>
                        <button className="btn-num" value={1} onClick={(e) => setNum(e.target.value)} >1</button>
                        <button className="btn-num" value={2} onClick={(e) => setNum(e.target.value)} >2</button>
                        <button className="btn-num" value={3} onClick={(e) => setNum(e.target.value)} >3</button>
                        <button className="btn-num" value={4} onClick={(e) => setNum(e.target.value)} >4</button>
                        <button className="btn-num" value={5} onClick={(e) => setNum(e.target.value)} >5</button>
                        <button className="btn-num" value={6} onClick={(e) => setNum(e.target.value)} >6</button>
                        <button className="btn-num" value={7} onClick={(e) => setNum(e.target.value)} >7</button>
                        <button className="btn-num" value={8} onClick={(e) => setNum(e.target.value)} >8</button>
                        <button className="btn-num" value={9} onClick={(e) => setNum(e.target.value)} >9</button>
                        <button className="btn-num" value={0} onClick={(e) => setNum(e.target.value)} >0</button>
                        <button className="btn-num" value={"."} onClick={(e) => setNum(e.target.value)} >.</button>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Calculator