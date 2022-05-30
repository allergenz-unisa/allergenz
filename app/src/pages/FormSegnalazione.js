import { List, ListItem, MenuItem, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";

const cucine = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
];

const FormSegnalazione = () => {

    const { changeTitle } = useTitleContext();
    useEffect(() => {
    changeTitle("Segnalazione di un Locale");
    }, []);

  return(
      <div>
          <Paper maxW>
            <Typography variant="h5" component="h1"> Segnala un locale</Typography>
            <Typography> Grazie per aver scelto di contribuire alla crescita della nostra community! Grazie a te, sempre meno persone con intolleranze alimentari avranno difficoltà a trovare e scegliere un ristorante in cui poter mangiare. Ti invitiamo a inserire i dati a tua disposizione nel form di seguito... </Typography>
          
            <List>
                <ListItem>
                    <Typography> Dati del locale </Typography>
                </ListItem>
                <ListItem>
                    <TextField id="NomeLocale" label="Nome del locale"/>
                </ListItem>
                <ListItem>
                    <TextField id="Indirizzo" label="Indirizzo"/>
                </ListItem>
                <ListItem>
                    <TextField id="Citta" label="Città"/>
                </ListItem>
                <ListItem>
                    <TextField id="CAP" label="CAP"/>
                </ListItem>
                <ListItem>
                    <TextField 
                        select 
                        helperText="Selezionare un tipo di cucina" 
                        id="Cucina" 
                        label="Cucina"
                    >
                        {cucine.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </ListItem>
                    <ListItem>
                        <TextField 
                            select 
                            helperText="Selezionare l'allergene che è possibile evitare in questo locale" 
                            id="Allergene" 
                            label="Allergene"
                        >
                            {cucine.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                            ))}
                        </TextField>
                    </ListItem>
                
            </List>
          </Paper>
          
      </div>
  );
};

export default FormSegnalazione;