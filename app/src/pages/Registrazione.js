import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Registrazione() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="nome" label="Nome" />
        <TextField id="cognome" label="Cognome" />
        <TextField id="email" label="Email" />
        <TextField id="password-input" label="Password" type="password" />
        <TextField
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
