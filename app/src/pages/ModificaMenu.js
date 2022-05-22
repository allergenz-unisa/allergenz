import { Box, Button, Card, CardActions, CardContent, Drawer, Grid, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import Portata from "@mui/icons-material/Restaurant";
import Modifica from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ModificaMenu = () => {
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h3">
                        Ristorante da Carmine
                    </Typography>

                    <Typography>
                        Aggiungi o modifica i piatti cliccando...
                    </Typography>
                </Grid>
            
             
        
                <Grid item xs={12} md={6} lg={3}>
                    <Box sx={{ minWidth: 275 }}>
                        <Card xs={12} md={10} lg={2}>
                            <CardContent>
                                <Grid container direction="row">
                                    <Icon>
                                        <Portata />
                                    </Icon>
                                    <Typography>
                                        Nome piatto
                                    </Typography>
                                    <IconButton component={Link} to="/account">
                                        <Modifica />
                                    </IconButton>
                                </Grid>

                                <Drawer />

                                <Grid container direction="row">
                                    <Icon>
                                        <Portata />
                                    </Icon>
                                    <Typography>
                                        Nome piatto
                                    </Typography>
                                    <IconButton component={Link} to="/account">
                                        <Modifica />
                                    </IconButton>
                                </Grid>

                                <Drawer />

                                <Grid container direction="row">
                                    <Icon>
                                        <Portata />
                                    </Icon>
                                    <Typography>
                                        Nome piatto
                                    </Typography>
                                
                                    <IconButton component={Link} to="/account">
                                        <Modifica />
                                    </IconButton>
                                </Grid>

                            </CardContent>

                            <CardActions>
                                <Button color="secondary"> aggiungi un nuovo piatto...</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>

                <Grid container fluid sx={{ marginTop: 5 }}>
                    <Grid item xs={12} md={12} lg={4}>
                    <Button fullWidth variant="outlined" color="secondary"> Indietro </Button>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default ModificaMenu;