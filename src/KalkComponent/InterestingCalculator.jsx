import React from "react"
import { useState, useEffect } from "react";
import Patyczki from "./PatyczkiKomponent";
import Buttons from "./Buttons";
import NormalCalculator from "./NormalCalc";
import './myCss.css'
function Calculator(){
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const [mode,setMode] = useState("menu")
    const [iloscPatyczkow,setIloscPatyczkow] = useState(Math.floor(Math.random()*23)+11)
    const [clickable,setClickability] = useState(true)
    const pomoc = "Przed Tobą kilka patyczków. W swoim ruchu możesz zabrac 1 lub 2 patyczki. Kto zabierze ostatni przegrywa."
    async function zabierzPatyczek(x){
        setClickability(false)
        let helper = iloscPatyczkow
        let nowaIloscPatyczkow = helper - x
        setIloscPatyczkow(nowaIloscPatyczkow)
        if(nowaIloscPatyczkow<1){
            setMode("przegrana-gracz")
            setIloscPatyczkow(Math.floor(Math.random()*23)+11)
            return -1
        } 
        await timeout(1000);
        nowaIloscPatyczkow=helper-3
        setIloscPatyczkow(nowaIloscPatyczkow)
        if (nowaIloscPatyczkow<1) 
        {
            setMode("przegrana-bot")
            setIloscPatyczkow(Math.floor(Math.random()*23)+11)
        }
        setClickability(true)
    }
    return(
        <div>            
            {mode ==='menu' &&
            <div className="menu-calc"> 
            <h1 className="white">Witam<br/>Wybierz pigółkę</h1>
            <button className="btn" type="button" onClick={()=>setMode("patyczki")}>PATYCZKI</button>
            <button className="btn" type="button" onClick={()=>setMode("kalk")}>KALKULATOR</button>
            </div>
            }
            {mode ==='patyczki' &&
            <div className="menu-calc">
                <p className="white">Aktualna liczba patyczków: {iloscPatyczkow}</p>
                <Patyczki licznik={iloscPatyczkow}/><br/>
                <Buttons klik={zabierzPatyczek} boolean={clickable}/>
                <div className="block">            
                    <button onClick={()=>alert(pomoc)} className="btn btn-zasady">ZASADY</button>
                    <button className="btn" type="button" onClick={()=>setMode("menu")}>Wróć do pigułek</button>
                </div>   
            </div>
            }
            {mode==='przegrana-gracz'&&
            <div>
                <h1>Koniec gry<br/>Zabrałeś ostatni patyczek</h1>
            <button className="btn btn-success" type="button" onClick={()=>setMode("menu")}>Wróć do pigółek</button>
            </div>
            }
            {mode==='przegrana-bot'&&
            <div>
                <h1>Koniec gry<br/>Bot zabrał ostatni patyczek<br/>Wygrałeś</h1>
            <button className="btn btn-success" type="button" onClick={()=>setMode("menu")}>Wróć do pigółek</button>
            </div>
            }
            {mode ==='kalk'&&
            <NormalCalculator back={()=>setMode("menu")}/>
            }
        </div>
    )
}
export default Calculator