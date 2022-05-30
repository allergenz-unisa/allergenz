import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";


const Conferma = () => {
    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle("Pagina di conferma");
    }, []);

  return (
      <div>
         ciao 
      </div>

  );
};

export default Conferma;