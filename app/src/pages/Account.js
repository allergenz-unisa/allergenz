import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  MenuItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import EditIcon from "@mui/icons-material/Edit";
import DatiAnagrafici from "@mui/icons-material/AccountBox";
import Intolleranze from "@mui/icons-material/DinnerDining";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import { getUserByToken } from "../api/Allergenz";
import CloseIcon from "@mui/icons-material/Close";
import GoBackButton from "../components/GoBackButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Account = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState("");
  const { changeTitle } = useTitleContext();

  const token = localStorage.getItem("token");
  console.log(token);

  async function getUtente() {
    const user = await getUserByToken();
    setUser(user);
  }

  useEffect(() => {
    getUtente();
    changeTitle("Il tuo profilo");
  }, []);

  const [formValues, setFormValues] = useState([{ name: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

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

  return (
    <div>
      {localStorage.getItem("token") === null ? (
        <div>
          <Box maxWidth="md" justifyContent="center" margin="auto">
            <Card sx={{ marginBottom: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Registrati o effettua il login e riprova!" />
                </ListItem>
              </List>

              <Typography m={2}>
                Per accedere all'area personale è necessario autenticarsi.{" "}
                <br />
                Se non sei ancora registrato sulla piattaforma Allergenz,
                iscriviti ora per non perderti i vantaggi riservati alla nostra
                community: potrai essere d'aiuto ad altre persone, mettere like
                per suggerire i locali che preferisci, accedere all'area
                personale...e tanto altro ancora! <br />
              </Typography>
            </Card>

            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <GoBackButton mt={2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white", fontWeight: "bold" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Effettua il login
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </Box>
        </div>
      ) : (
        <Box
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          margin="auto"
          component="form"
          sx={{
            maxWidth: 350,
            backgroundColor: "#FAF4F4",
          }}
          noValidate
          autoComplete="off"
        >
          <Card>
            <List>
              <ListItem>
                <Avatar
                  alt="Profile Image"
                  src="../../img/Ellipse.png"
                  sx={{
                    width: 120,
                    height: 120,
                    border: 2,
                    borderColor: "#b34b2a",
                    margin: "auto",
                  }}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <DatiAnagrafici />
                </ListItemIcon>
                <ListItemText primary="Dati Anagrafici" />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="fullName"
                  label={user.fullName}
                />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="username"
                  label={user.username}
                />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="email"
                  label={user.email}
                />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="password"
                  label={user.password}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Intolleranze />
                </ListItemIcon>
                <ListItemText primary="Intolleranze" />
              </ListItem>

              <ListItem fullWidth>
                <form onSubmit={handleSubmit}>
                  {formValues.map((element, index) => (
                    <div key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <TextField
                          color="secondary"
                          sx={{
                            mb: 2,
                          }}
                          fullWidth
                          select
                          name="Allergene"
                          id="Allergene"
                          label="Scegli un allergene"
                        >
                          {allergeni.map((option) => (
                            <MenuItem
                              key={option.value}
                              value={option.value}
                              onChange={(e) => handleChange(index, e)}
                            >
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                        <IconButton onClick={() => removeFormFields(index)}>
                          <RemoveCircleIcon color="secondary" />
                        </IconButton>
                      </Box>
                    </div>
                  ))}
                  <div className="button-section">
                    <Button
                      onClick={() => addFormFields()}
                      sx={{ fontWeight: "bold" }}
                      fullWidth
                      variant="text"
                      color="secondary"
                    >
                      <IconButton onClick={() => addFormFields()}>
                        <AddCircleIcon color="secondary" />
                      </IconButton>
                      Aggiungi intolleranza
                    </Button>

                    <Button
                      sx={{ color: "white", fontWeight: "bold" }}
                      variant={"contained"}
                      color={"secondary"}
                      fullWidth
                      type="submit"
                    >
                      Salva le modifiche
                    </Button>
                  </div>
                </form>
              </ListItem>
            </List>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default Account;
