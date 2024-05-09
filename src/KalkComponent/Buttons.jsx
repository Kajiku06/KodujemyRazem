import React from "react"
function Buttons({klik, boolean}){
    if (boolean==true){
    return(
        <div className="block">
            <button onClick={()=>klik(2)} type="button" className="btn">Zabierz DWA patyczki</button>
            <button onClick={()=>klik(1)} type="button" className="btn">Zabierz JEDEN patyczek</button>
        </div>
    )}
    return(
            <div className="block">
                <button className="btn btn-disabled">Ruch bota</button>
                <button className="btn btn-disabled">Ruch bota</button>
            </div>
        )
}
export default Buttons