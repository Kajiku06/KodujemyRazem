import React from "react"
function Buttons({klik, boolean}){
    if (boolean==true){
    return(
        <>
            <button onClick={()=>klik(2)} type="button" className="btn btn-primary">Zabierz DWA patyczki</button>
            <button onClick={()=>klik(1)} type="button" className="btn btn-primary">Zabierz JEDEN patyczek</button>
        </>
    )}
    return(
            <>
                <button className="btn btn-primary" disabled>
                    <span className="spinner-border spinner-border-sm"></span>
                    Ruch bota
                </button>
                <button className="btn btn-primary" disabled>
                    <span className="spinner-border spinner-border-sm"></span>
                    Ruch bota
                </button>    
            </>
        )
}
export default Buttons