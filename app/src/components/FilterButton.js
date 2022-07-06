import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Switch from '@mui/material/Switch';

const StyledMenu = styled((props) => (

  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus(props) {
  const [filters, setFilters] = React.useState([]);

  const handleChange = (event, filter) => {
    if(event.target.checked) {
      setFilters([...filters, filter]);
      props.onChangeFilter([...filters, filter]);
    }
    else{
      const newFilters = [];
        for (const f of filters) {
          if (f === filter) {
            continue;
          }
          newFilters.push(f);
        }
        setFilters([...newFilters]);
        props.onChangeFilter([...newFilters]);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(filters);
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filtri
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Le mie intolleranze
          <Switch color="secondary"/>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Lattosio
          <Switch color="secondary"/>
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Glutine
          <Switch color="secondary"/>
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Crostacei
          <Switch color="secondary"/>
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Frutta a guscio
          <Switch color="secondary"/>
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Nichel
          <Switch checked={filters.includes("nichel")} onChange={(e)=>handleChange(e, "nichel")} color="secondary"/>
        </MenuItem>
        <MenuItem
          sx={{ justifyContent: "flex-end" }}
          
          disableRipple
        >
          Proteina LTP
          <Switch color="secondary"/>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
