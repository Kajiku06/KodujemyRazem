import React from "react";

function Patyczki({licznik}){
    let lista = [];
    for(let i=0;i<licznik;i++){
        lista[i]=i
    }
    let i =0
    lista = lista.map(item=><li className="list-group-item" key={i++}>I</li>)
    return(
        <ul className="list-group list-group-horizontal">{lista}</ul>
    )
}
export default Patyczki