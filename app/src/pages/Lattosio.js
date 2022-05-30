import { Avatar, Card, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";
import CloseIcon from "@mui/icons-material/Close";
import GoBackButton from "../components/GoBackButton";

const Lattosio = () => {

    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle("Lattosio");
    }, []);

    return (
        <div>
            <Box maxWidth="md" justifyContent="center" margin="auto">
                <Card sx={{marginBottom: 1}}>
                    <List>
                        <ListItem secondaryAction={
                            <IconButton edge="end" component={Link} to="/allergeni">
                                <CloseIcon />
                            </IconButton>
                            }>

                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" src="../../icon/lactose-free.png" />
                            </ListItemIcon>
                            <ListItemText primary="Lattosio" />

                        </ListItem>
                    </List>
                    
                    <Typography m={2}>
                        Il lattosio è uno zucchero composto da glucosio e galattosio. L'intolleranza al lattosio....
                    </Typography>
                    
                </Card>

                <GoBackButton mt={2}/>
            </Box>
            
            
        </div>
    );
};

export default Lattosio;