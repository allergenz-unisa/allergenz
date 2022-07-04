import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import { addNewUser } from "../api/Allergenz";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo/4x/allergens_logo@4x.png";

export default function Registrazione() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const registerUser = async () => {
    setErrors([]);
    let errs = [];
    const user = {
      id: Date.now(),
      fullName: fullName,
      username: username,
      password: password,
      email: email,
      intolleranze: [],
    };

    if (!user.fullName) errs.push("Nome obbligatorio");

    if (!user.username) errs.push("Username obbligatorio");

    if (!user.email) errs.push("Email obbligatoria");

    if (!user.password) errs.push("Password obbligatoria");

    if (!confirmPassword) errs.push("Conferma della password obbligatoria");

    if (user.password !== confirmPassword)
      errs.push("Le password inserite non coincidono");

    if (errs.length) {
      setErrors(errs);
      return;
    }

    await addNewUser(user);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: 300,
          }}
          alt="Logo"
          src={logo}
        />
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                id="lastName"
                label="Username"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Indirizzo email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                name="conferma-password"
                label="Conferma Password"
                type="password"
                id="conferma-password"
              />
            </Grid>
          </Grid>
          {errors.length > 0 ? (
            <Alert severity="error">
              <Typography>
                Attenzione correggere i seguenti errori:
                <ul>
                  {errors.map((err) => (
                    <li>{err}</li>
                  ))}
                </ul>
              </Typography>
            </Alert>
          ) : null}
          <Button
            onClick={() => registerUser()}
            color={"secondary"}
            fullWidth
            variant="contained"
            sx={{ color: "white", mt: 3, mb: 2 }}
          >
            Registrati
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link color="secondary" href="/login" variant="body2">
                Sei già registrato? Effettua il login cliccando qui
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
