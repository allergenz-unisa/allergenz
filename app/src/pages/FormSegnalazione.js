import { Button, Grid, List, ListItem, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";

const cucine = [
    {
      value: '1',
      label: 'sushi',
    },
    {
      value: '2',
      label: 'pizza',
    },
    {
        value: '3',
        label: 'hamburger',
    },
    {
        value: '4',
        label: 'fast food',
    },
    {
        value: '5',
        label: 'cucina di terra',
    },
    {
        value: '6',
        label: 'cucina di mare',
    },
    {
        value: '7',
        label: 'piadine e pite',
    },
];

const allergeni = [
    {
      value: '1',
      label: 'lattosio',
    },
    {
      value: '2',
      label: 'glutine',
    },
    {
        value: '3',
        label: 'crostacei',
    },
    {
        value: '4',
        label: 'frutta a guscio',
    },
    {
        value: '5',
        label: 'nichel',
    },
    {
        value: '6',
        label: 'proteina LTP',
    },
];

const FormSegnalazione = () => {
    let navigate = useNavigate();

    const { changeTitle } = useTitleContext();
    useEffect(() => {
    changeTitle("Segnalazione di un locale");
    }, []);

  return(
      <div sx={{bgcolor: '#FAF4F4'}}>
          <Grid continer>
            <Paper>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography sx={{mr: 2, ml: 2, mb: 2}} variant="h4" component="h1"> Segnala un locale</Typography>
                    <Typography sx={{mr: 2, ml: 2, mb: 2}}> Grazie per aver scelto di contribuire alla crescita della nostra community! Grazie a te, sempre meno persone con intolleranze alimentari avranno difficoltà a trovare e scegliere un ristorante in cui poter mangiare. Ti invitiamo a inserire i dati a tua disposizione nel form di seguito... </Typography>
                </Grid>

                <Grid item xs={12} md={6} lg={2}>
                    <List>
                        <ListItem>
                            <Typography variant="h6" component="h2" sx={{fontWeight: "bold"}}> Dati del locale </Typography>
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth id="NomeLocale" label="Nome del locale"/>
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth id="Via" label="Via..."/>
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth id="Citta" label="Città"/>
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth id="CAP" label="CAP"/>
                        </ListItem>
                        <ListItem>
                            <TextField 
                                fullWidth
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
                                    fullWidth 
                                    select 
                                    helperText="Selezionare l'allergene che è possibile evitare in questo locale" 
                                    id="Allergene" 
                                    label="Allergene"
                                >
                                    {allergeni.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                    ))}
                                </TextField>
                            </ListItem>

                            <ListItem>
                                <Grid container direction="row" spacing={2}>
                                <Grid item>
                                        <Button
                                        variant="contained" 
                                        color="secondary"
                                        style={{ color: "white" }}
                                        onClick={() => {navigate("/conferma")}}
                                        >
                                            Conferma
                                        </Button>
                                    </Grid>

                                    <Grid item>
                                        <Button
                                        variant="outlined" 
                                        color="secondary"
                                        onClick={() => {navigate(-1)}}
                                        > 
                                            Annulla
                                        </Button>
                                    </Grid>
                                </Grid>

                            </ListItem>
                    </List>
                </Grid> 
            </Paper>
          </Grid>
          
          
      </div>
  );
};

export default FormSegnalazione;