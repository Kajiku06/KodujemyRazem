import { useState, useEffect } from "react"
import React from "react"
function NormalCalculator(){
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
        let number1 = eval(summary)
        let number2 = eval(presentNumber)
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
        <div className="row">
            <h1>Kalkulator dziesiętny</h1>
            <h1>{summary}{presentSign}{orientation[0]}{presentNumber}{orientation[1]}</h1>            
            <div className="row col-5">
                <button onClick={changeOrientation} className="btn btn-primary">liczba ujemna / dodatnia</button>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"1")} className="btn btn-primary col-3">1</button>
                    <button onClick={()=>setNumber(presentNumber+"2")} className="btn btn-primary col-3">2</button>
                    <button onClick={()=>setNumber(presentNumber+"3")} className="btn btn-primary col-3">3</button>
                    <button onClick={()=>trySign("-")} className="btn btn-warning col-3">-</button>
                </div>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"4")} className="btn btn-primary col-3">4</button>
                    <button onClick={()=>setNumber(presentNumber+"5")} className="btn btn-primary col-3">5</button>
                    <button onClick={()=>setNumber(presentNumber+"6")} className="btn btn-primary col-3">6</button>
                    <button onClick={()=>trySign("+")} className="btn btn-warning col-3">+</button>
                </div>
                <div className="row">
                    <button onClick={()=>setNumber(presentNumber+"7")} className="btn btn-primary col-3">7</button>
                    <button onClick={()=>setNumber(presentNumber+"8")} className="btn btn-primary col-3">8</button>
                    <button onClick={()=>setNumber(presentNumber+"9")} className="btn btn-primary col-3">9</button>
                    <button onClick={()=>trySign(":")} className="btn btn-warning col-3">:</button>
                </div>
                <div className="row">
                    <button onClick={addComa} className="btn btn-warning col-3">.</button>
                    <button onClick={addZero} className="btn btn-primary col-3">0</button>
                    <button onClick={clear} className="btn btn-danger col-3">C</button>
                    <button onClick={()=>trySign("x")} className="btn btn-warning col-3">x</button>
                </div>
                {isPossible==true && <button onClick={execute} className="btn btn-success">Wykonaj</button>}
                {isPossible==false && <button disabled onClick={execute} className="btn btn-success">Wykonaj</button>}
                <button onClick={superClear} className="btn btn-danger">Wyczyść</button>
            </div>
            <div className="col-6">
                <h2>Jak tego używać?</h2>
                <p>Najpierw potrzebujesz wybrać od jakiej liczby zacząć. Wybierz ją za pomocą przycisków, a następnie wybierz 'wykonaj'.</p>
                <p>Brawo. Teraz możesz wykonywać działania jakie chcesz. Wpisz liczbę oraz znak i kliknij zielony guzik.</p>
                <p>Jeśli wpiszesz nie taką liczbę jaką chciałeś, nie panikuj. Wyczyść aktualną liczbę przyciskiem 'C'.</p>
                <p>Kiedy będziesz potrzebował(a) liczby ujemnej, wybierz guzik 'liczba ujemna / dodatnia'.</p>
                <p>Gdy będziesz chciał(a) wyzerować rachunek, klknij guzik 'Wyczyść'.</p>
            </div>
        </div>
    )
}
export default NormalCalculator