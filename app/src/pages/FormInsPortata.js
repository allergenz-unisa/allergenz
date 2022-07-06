import {
  Alert,
  Button,
  Grid,
  List,
  ListItem,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";
import { getRestarantById, updateRestaurant } from "../api/Allergenz";

const allergeni = [
  {
    value: "Lattosio",
    label: "Lattosio",
  },
  {
    value: "Glutine",
    label: "Glutine",
  },
  {
    value: "Crostacei",
    label: "Crostacei",
  },
  {
    value: "Frutta a guscio",
    label: "Frutta a guscio",
  },
  {
    value: "Nichel",
    label: "Nichel",
  },
  {
    value: "Proteina LTP",
    label: "Proteina LTP",
  },
];

const FormInsPortata = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [ristorante, setRistorante] = useState({});
  const [nomePiatto, setNomePiatto] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [allergene, setAllergene] = useState("");
  const [errors, setErrors] = useState([]);

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle('Inserisci una portata per " ' + ristorante.localName + ' " ');
  }, []);

  useEffect(() => {
    getRestarantById(id)
      .then(function (ristorante) {
        setRistorante(ristorante);
        console.log(ristorante);
        console.log("ok");
      })
      .catch(function (error) {
        console.log("ERRORE");
        console.error(error);
      });
  }, []);

  /**
   * Questa funzione colleziona tutte le variabili di stato del form
   * e se non ci sono errori invoca il metodo updateRestaurant dell'API
   */
  const inserimentoPortata = async () => {
    setErrors([]);
    let errs = [];
    const piatto = {
      name: nomePiatto,
      descrizione: descrizione,
      allergenFree: allergene,
    };

    if (!piatto.name)
      errs.push("È obbligatorio inserire il nome della portata");

    if (!piatto.descrizione)
      errs.push("È obbligatorio inserire la descrizione della portata");

    if (!piatto.allergenFree)
      errs.push(
        "È obbligatorio inserire l'allergene a cui il locale pone attenzione con questa portata"
      );

    if (errs.length) {
      setErrors(errs);
      return;
    }

    console.log(piatto);
    ristorante.Menu.push(piatto);
    await updateRestaurant(ristorante);
    window.location.href = "/conferma";
  };

  return (
    <div sx={{ bgcolor: "#FAF4F4" }}>
      <Grid container>
        <Grid item xs={12} md={2} lg={3} />
        <Grid item xs={12} md={8} lg={6}>
          <Paper>
            <Typography
              sx={{ mr: 2, ml: 2, mb: 2 }}
              variant="h4"
              component="h1"
            >
              {" "}
              Aggiungi un nuovo piatto
            </Typography>
            <Typography sx={{ mr: 2, ml: 2, mb: 2 }}>
              {" "}
              Crea un nuovo piatto aggiungendo le infomazioni necessarie, non
              dimenticare di aggiungere eventuali allergeni{" "}
            </Typography>
            <List>
              <ListItem>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {" "}
                  Informazioni sul piatto{" "}
                </Typography>
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  name="NomePiatto"
                  id="NomePiatto"
                  label="Nome del piatto"
                  onChange={(e) => setNomePiatto(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  name="Descrizione"
                  id="Descrizione"
                  label="Breve descrizione"
                  onChange={(e) => setDescrizione(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  select
                  name="Allergene"
                  id="Allergene"
                  label="Scegli l'allergene non presente"
                >
                  {allergeni.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      onClick={() => setAllergene(option.value)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </ListItem>

              <ListItem>
                <Grid container spacing={2}>
                  {errors.length > 0 ? (
                    <Alert severity="error">
                      <Typography>
                        Attenzione correggere i seguenti errori:
                        <ul>
                          {errors.map((err) => (
                            <li>{err}</li>
                          ))}
                        </ul>
                      </Typography>
                    </Alert>
                  ) : null}

                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Annulla
                    </Button>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      style={{ color: "white" }}
                      onClick={() => inserimentoPortata()}
                    >
                      Conferma
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2} lg={3} />
      </Grid>
    </div>
  );
};

export default FormInsPortata;
