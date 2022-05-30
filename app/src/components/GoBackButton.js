import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = (props) => {
    let navigate = useNavigate();
    
    return (
        <Button
            onClick={() => { navigate(-1) }}
            fullWidth 
            variant="outlined" 
            color="secondary"> 
                Indietro 
        </Button>
    )
    
}

export default GoBackButton; 