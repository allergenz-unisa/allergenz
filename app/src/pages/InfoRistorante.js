import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";


const InfoRistorante = () => {

    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle('Dettagli ristorante')
    }, [])

    return (
          <div>
            
          </div>  
    )
}

export default InfoRistorante;