import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        <Button color="secondary" href="#link">
          Non sei ancora registrato? Clicca qui e registrati ora!
        </Button>
      </div>

      <Button color="secondary" variant="contained">
        Login
      </Button>
    </Box>
  );
}
