import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import CloseIcon from "@mui/icons-material/Close";
import Allergens from "@mui/icons-material/FileCopy";
import Homepage from "@mui/icons-material/Home";
import Login from "@mui/icons-material/Login";
import ProfiloUtente from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import useTitleContext from "./PageTitleContext";
import logo from "../images/logo/2x/allergens_logo_w@2x.png";

const MainLayout = ({ children }) => {
  const drawerWidth = 270;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { title } = useTitleContext();
  const token = localStorage.getItem("token");
  console.log(token);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const text = {
    color: "white",
    fontWeight: "bold",
  };

  const drawer = (
    <div>
      <List>
        <ListItem />
        <ListItem />

        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton component={Link} to="/">
            <Box
              component="img"
              sx={{
                maxWidth: 150,
                margin: "auto",
              }}
              alt="Logo"
              src={logo}
            />
          </ListItemButton>
        </ListItem>

        <ListItem />
        <ListItem />

        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Homepage style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: text }}
              primary={"Home"}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton component={Link} to="/account">
            <ListItemIcon>
              <ProfiloUtente style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: text }}
              primary={"Il tuo profilo"}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton component={Link} to="/form-segnalazione-locale">
            <ListItemIcon>
              <RestaurantIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: text }}
              primary={"Inserire un locale"}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={handleDrawerToggle}>
          <ListItemButton component={Link} to="/allergeni">
            <ListItemIcon>
              <Allergens style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: text }}
              primary={"Schede degli Allergeni"}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {!token ? (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login">
              <ListItemIcon>
                <Login style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ style: text }}
                primary={"Login"}
              />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              <ListItemIcon>
                <Login style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ style: text }}
                primary={"Logout"}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>
  );

  const container = document.body;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "secondary.main",
            },
          }}
        >
          <ListItem />
          <ListItem />

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                ml: 25,
                display: { sm: "none" },
              }}
            >
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "secondary.main",
            },
          }}
          open
        >
          <Toolbar></Toolbar>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingTop: 10,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
