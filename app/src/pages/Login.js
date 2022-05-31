import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getUserByLogin } from "../api/Allergenz";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  /**
   * Questa funzione colleziona tutte le variabili di stato del form
   * e se non ci sono errori invoca il metodo addNewUser dell'API
   */
  const loginUser = async () => {
    setErrors([]);
    let errs = []
    const user = {
      email: email,
      password: password
    }

    if (!user.email)
      errs.push("Email obbligatorio");

    if(!user.password)
      errs.push("Password obbligatoria")

    if (errs.length) {
      setErrors(errs);
      return;
    }

    await getUserByLogin(user);
    window.location.href="/";
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
        <TextField fullWidth onChange={e => setEmail(e.target.value)} id="email" label="Email" />
        <TextField
          fullWidth
          id="password-input"
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Button color="secondary" component={Link} to="/registrazione">
          Non sei ancora registrato? Clicca qui e registrati ora!
        </Button>
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

      <Button
        sx={{ color: "white" }}
        variant={"contained"}
        color={"secondary"}
        fullWidth
        onClick={() => loginUser()}
      >
        Login
      </Button>
    </Box>
  );
}
