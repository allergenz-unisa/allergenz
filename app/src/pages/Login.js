import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import { getUserByLogin } from "../api/Allergenz";
import logo from "../images/logo/4x/allergens_logo@4x.png";

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
    let errs = [];
    const user = {
      email: email,
      password: password,
    };

    if (!user.email) errs.push("Email obbligatorio");

    if (!user.password) errs.push("Password obbligatoria");

    if (errs.length) {
      setErrors(errs);
      return;
    }

    await getUserByLogin(user);
    window.location.href = "/";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Indirizzo email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

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
            color={"secondary"}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ color: "white", mt: 3, mb: 2 }}
            onClick={() => loginUser()}
          >
            Login
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link color="secondary" href="/registrazione" variant="body2">
                {"Non sei ancora registrato? Clicca qui e registrati ora!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
