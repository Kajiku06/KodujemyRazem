import React from "react";

function Patyczki({licznik}){
    let lista = [];
    for(let i=0;i<licznik;i++){
        lista[i]=i
    }
    let i =0
    lista = lista.map(item=><li className="li-stick" key={i++}><b>I</b></li>)
    return(
        <ul className="list-group">{lista}</ul>
    )
}
export default Patyczki