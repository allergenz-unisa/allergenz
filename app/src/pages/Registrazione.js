import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Registrazione() {
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
        <TextField fullWidth id="nome" label="Nome" />
        <TextField fullWidth id="cognome" label="Cognome" />
        <TextField fullWidth id="email" label="Email" />
        <TextField
          fullWidth
          id="password-input"
          label="Password"
          type="password"
        />
        <TextField
          fullWidth
          id="password-confirm"
          label="Conferma password"
          type="password"
        />
      </div>

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
      >
        Registrati
      </Button>
    </Box>
  );
}
