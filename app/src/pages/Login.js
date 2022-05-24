import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
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
        <TextField id="email" label="Email" />
        <TextField id="password-input" label="Password" type="password" />
      </div>

      <div>
        <Button color="secondary" component={Link} to="/registrazione">
          Non sei ancora registrato? Clicca qui e registrati ora!
        </Button>
      </div>

      <Button
        sx={{ color: "white" }}
        variant={"contained"}
        color={"secondary"}
        fullWidth
      >
        Login
      </Button>
    </Box>
  );
}
