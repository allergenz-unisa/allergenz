import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";

const FormInsPortata = () => {
    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle('Inserimento della portata')
  }, [])

  return(
      <div>
          <Grid container maxWidth={'md'} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} lg={6}>
                    <Typography variant="h4" component="h1">
                        Aggiungi un nuovo piatto
                    </Typography>
                
                    <Typography>
                        Aggiungi un nuovo piatto compilando i campi del seguente form
                    </Typography>
                </Grid>
            </Grid>
      </div>
  )
};

export default FormInsPortata;