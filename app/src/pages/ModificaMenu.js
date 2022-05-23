import { 
    Button, 
    Drawer, 
    Grid, 
    IconButton, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Paper, 
    Typography } from "@mui/material";
import React, { useEffect } from "react";
import Portata from "@mui/icons-material/Restaurant";
import Modifica from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";

const ModificaMenu = () => {
    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle('Modifica il menù')
    }, [])
    return (
        <div>
            <Grid container maxWidth={'md'} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h4" component="h1">
                        Ristorante da Carmine
                    </Typography>
                <Typography>
                    Aggiungi una nuova portata o modifica i piatti già inseriti cliccando l'apposita icona...
                </Typography>
                <Paper sx={{ 
                    marginTop: 2,
                    marginBottom: 3}}>
                    <List>
                        <ListItem 
                        secondaryAction={<IconButton edge="end" component={Link} to="/account"> <Modifica />
                             </IconButton>}>

                            <ListItemIcon>
                                <Portata />
                            </ListItemIcon>
                            <ListItemText primary="Modifica piatto"/>
                        </ListItem>
                        
                        <Drawer />

                        <ListItem 
                        secondaryAction={<IconButton edge="end" component={Link} to="/account"> <Modifica />
                             </IconButton>}>

                            <ListItemIcon>
                                <Portata />
                            </ListItemIcon>
                            <ListItemText primary="Modifica piatto"/>
                        </ListItem>
                        
                        <Drawer />

                        <ListItem 
                        secondaryAction={<IconButton edge="end" component={Link} to="/account"> <Modifica />
                             </IconButton>}>

                            <ListItemIcon>
                                <Portata />
                            </ListItemIcon>
                            <ListItemText primary="Modifica piatto"/>
                        </ListItem>
                        
                        <Drawer />

                        <ListItem 
                        secondaryAction={<IconButton edge="end" component={Link} to="/account"> <Modifica />
                             </IconButton>}>

                            <ListItemIcon>
                                <Portata />
                            </ListItemIcon>
                            <ListItemText primary="Modifica piatto"/>
                        </ListItem>
                        
                        <Drawer />

                        
                    </List>
                    <Button fullWidth variant='text' color="secondary"> Aggiungi una nuova portata... </Button>
                </Paper>
                    <GoBackButton />
                </Grid>
            </Grid>
        </div>
    )
}

export default ModificaMenu;