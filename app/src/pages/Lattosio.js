import { Avatar, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";

const Lattosio = () => {

    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle("Lattosio");
    }, []);

    return (
        <div>
            <Box maxWidth="md" justifyContent="center" margin="auto">
                <Card>
                    <Avatar alt="Remy Sharp" src="../../icon/lactose-free.png" />
                    <Typography variant="h5" component="h1"> Lattosio </Typography>
                    
                    <Typography sx={{marginBottom: 2}}>
                        Il lattosio è uno zucchero composto da glucosio e galattosio. L'intolleranza al lattosio....
                    </Typography>
                    
                </Card>
            </Box>
            
            
        </div>
    );
};

export default Lattosio;