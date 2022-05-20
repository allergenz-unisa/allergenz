import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Account() {
  return (
    <Card sx={{ minWidth: 275 }}>
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
        </div>

        <div>
          <TextField id="intolleranza1" label="intolleranza1" />
          <TextField id="intolleranza2" label="intolleranza2" />
        </div>
      </Box>

      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </Card>
  );
}
