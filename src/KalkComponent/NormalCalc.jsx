import { useState, useEffect } from "react"
import React from "react"
function NormalCalculator({back}){
    const [presentSign,setSign] = useState("+")
    const [orientation,setOrientation] = useState(["",""])
    const [presentNumber, setNumber] = useState("")
    const [summary,addSummary] = useState(0)
    const [isComa, setComa] = useState(true)
    const [isPossible,setPosible] = useState(false)
    useEffect(()=>{
        if ((presentNumber==0&&presentSign==":")||presentNumber=="") setPosible(false)
        else setPosible(true)
    },[presentNumber,presentSign])
    const addZero=()=>{
        if(presentNumber!="0"){
            setNumber(presentNumber+"0")
        }
    }
    const addComa=()=>{
        if(presentNumber=="0") setNumber("0.")
        else if(!isComa) setNumber(presentNumber+".")
    }
    const clear=()=>{
        setNumber("")
        setSign("+")
        setOrientation(["",""])
    }
    const changeOrientation=()=>{
        if(orientation[0]==""){
            setOrientation(["(-",")"])
        }
        else{
            setOrientation(["",""])
        }
    }
    const trySign=(sign)=>{
        if(summary!="0") setSign(sign)
    }
    const execute=()=>{
        let number1 = +summary
        let number2 = +presentNumber
        if (orientation[0]=="(-") number2*=-1
        if(presentSign=="+") addSummary(number1+number2)
        else if (presentSign=="-") addSummary(number1-number2)
        else if (presentSign=="x") addSummary(number1*number2)
        else if (presentSign==":"&&number1!=0) addSummary(number1/number2)
        clear()
    }
    const superClear=()=>{
        addSummary(0)
        clear()
    }
    return(
        <div className="menu-calc">
            <h1 className="white">Kalkulator dziesiętny</h1>
            <h1 className="white">{summary}{presentSign}{orientation[0]}{presentNumber}{orientation[1]}</h1>            
            <div>
                <button onClick={changeOrientation} className="btn">liczba ujemna / dodatnia</button>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"1")} className="btn">1</button>
                    <button onClick={()=>setNumber(presentNumber+"2")} className="btn">2</button>
                    <button onClick={()=>setNumber(presentNumber+"3")} className="btn">3</button>
                    <button onClick={()=>trySign("-")} className="btn">-</button>
                </div>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"4")} className="btn">4</button>
                    <button onClick={()=>setNumber(presentNumber+"5")} className="btn">5</button>
                    <button onClick={()=>setNumber(presentNumber+"6")} className="btn">6</button>
                    <button onClick={()=>trySign("+")} className="btn">+</button>
                </div>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"7")} className="btn">7</button>
                    <button onClick={()=>setNumber(presentNumber+"8")} className="btn">8</button>
                    <button onClick={()=>setNumber(presentNumber+"9")} className="btn">9</button>
                    <button onClick={()=>trySign(":")} className="btn">:</button>
                </div>
                <div className="">
                    <button onClick={addComa} className="btn">.</button>
                    <button onClick={addZero} className="btn">0</button>
                    <button onClick={clear} className="btn">C</button>
                    <button onClick={()=>trySign("x")} className="btn">x</button>
                </div>
                {isPossible==true && <button onClick={execute} className="btn">Wykonaj</button>}
                {isPossible==false && <button className="btn btn-disabled">Wykonaj</button>}
                <button onClick={superClear} className="btn btn-danger">Wyczyść</button>
            </div>
            <div className="white">
                <h2>Jak tego używać?</h2>
                <p>Najpierw potrzebujesz wybrać od jakiej liczby zacząć. Wybierz ją za pomocą przycisków, a następnie wybierz 'wykonaj'.</p>
                <p>Brawo. Teraz możesz wykonywać działania jakie chcesz. Wpisz liczbę oraz znak i kliknij zielony guzik.</p>
                <p>Jeśli wpiszesz nie taką liczbę jaką chciałeś, nie panikuj. Wyczyść aktualną liczbę przyciskiem 'C'.</p>
                <p>Kiedy będziesz potrzebował(a) liczby ujemnej, wybierz guzik 'liczba ujemna / dodatnia'.</p>
                <p>Gdy będziesz chciał(a) wyzerować rachunek, klknij guzik 'Wyczyść'.</p>
            </div>
            <button type="button" onClick={back} className="btn">Wróć do pigułek</button>
        </div>
    )
}
export default NormalCalculator