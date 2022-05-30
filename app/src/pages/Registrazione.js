import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { addNewUser } from "../api/Allergenz";

export default function Registrazione() {

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  /**
   * Questa funzione colleziona tutte le variabili di stato del form
   * e se non ci sono errori invoca il metodo addNewUser dell'API
   */
  const registerUser = async () => {
    setErrors([]);
    let errs = []
    const user = {
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      intolleranze: []
    }

    if (!user.fullName)
      errs.push("Nome obbligatorio");

    if (!user.username)
      errs.push("Username obbligatorio");

    if(!user.email)
      errs.push("Email obbligatoria");

    if(!user.password)
      errs.push("Password obbligatoria");

    if(!user.confirmPassword)
      errs.push("Conferma della password obbligatoria")

    if (errs.length) {
      setErrors(errs);
      return;
    }

    await addNewUser(user);
  }

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      margin="auto"
      component="form"
      sx={{
        maxWidth: 400,
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField fullWidth id="nome" label="Nome e Cognome" onChange={e => setFullName(e.target.value)}/>
        <TextField fullWidth id="username" label="Username" onChange={e => setUsername(e.target.value)}/>
        <TextField fullWidth id="email" label="Email" onChange={e => setEmail(e.target.value)}/>
        <TextField
          fullWidth
          id="password-input"
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          id="password-confirm"
          label="Conferma password"
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>

      {errors.length > 0 ? (
        <Alert severity="error">
          <Typography>
            Attenzione correggere i seguenti errori:
            <ul>
            {errors.map(err =>  <li>{err}</li> )}
            </ul>
          </Typography>
        </Alert>
      ) : null}

      <div>
        <Button color="secondary" component={Link} to="/login">
          Sei già registrato? Effettua il login cliccando qui
        </Button>
      </div>

      <Button
        sx={{ color: "white" }}
        variant={"contained"}
        color={"secondary"}
        fullWidth
        onClick={() => registerUser()}
      >
        Registrati
      </Button>
    </Box>
  );
}
