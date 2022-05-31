import { 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    Grid, 
    IconButton, 
    InputAdornment, 
    OutlinedInput, 
    Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useTitleContext from "../components/PageTitleContext";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Search from '@mui/icons-material/Search';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getRestarantByCategory } from "../api/Allergenz";

const RistoCategoria = () => {
   

    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    const { changeTitle } = useTitleContext();
    useEffect(() => {
        changeTitle(searchParams.get("categoria"))
    }, [])

    return (
          <div>
            <Grid container spacing={2}>

            <Grid item xs={12}>
                <OutlinedInput 
                    fullWidth
                    placeholder="Per effettuare una ricerca inizia a scrivere..."
                    id="outlined-adornment-weight"          
                    endAdornment={<InputAdornment position="end"> <Search /> </InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                />
            </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={() => {navigate("/dettagli-ristorante")}}>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
          </div>  
    )
}

export default RistoCategoria;