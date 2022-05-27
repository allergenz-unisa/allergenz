import React, { useEffect } from "react";
import { Avatar, Box, Button, Icon, TextField, Typography } from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DatiAnagrafici from "@mui/icons-material/AccountBox";
import Intolleranze from "@mui/icons-material/DinnerDining";

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
            <Avatar
              alt="Profile Image"
              src="../../img/person.jpg"
              sx={{ 
                width: 120, 
                height: 120, 
                border: 2, 
                borderColor: "#b34b2a" }}
            />
            <Icon> 
                <DatiAnagrafici />
            </Icon>
            <Typography sx = {{marginTop: 2, fontWeight: "bold" }}> Dati anagrafici </Typography>
            <TextField fullWidth id="nome" label="nome" />
            <TextField fullWidth id="cognome" label="cognome" />
            <TextField fullWidth id="email" label="email" />
            <TextField fullWidth id="password" label="password" />
         

            <Icon> 
                <Intolleranze />
            </Icon>
            <Typography sx = {{marginTop: 2, fontWeight: "bold" }}> Intolleranze </Typography>
            <TextField fullWidth id="intolleranza1" label="intolleranza1" />
            <TextField fullWidth id="intolleranza2" label="intolleranza2" />
          

          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
};

export default Account;
