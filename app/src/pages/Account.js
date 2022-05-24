import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

import Card from "@mui/material/Card";
const Account = () => {
  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Il tuo profilo");
  }, []);
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
      <Card>
        <Box
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          margin="auto"
          sx={{
            maxWidth: 300,
          }}
        >
          <div>
            <TextField fullWidth id="nome" label="nome" />
            <TextField fullWidth id="cognome" label="cognome" />
            <TextField fullWidth id="email" label="email" />
            <TextField fullWidth id="password" label="password" />
          </div>

          <div>
            <TextField fullWidth id="intolleranza1" label="intolleranza1" />
            <TextField fullWidth id="intolleranza2" label="intolleranza2" />
          </div>

          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
};

export default Account;
