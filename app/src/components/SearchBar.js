import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { searchRestarant } from "../api/Allergenz";

const SearchBar = (props) => {

  const [value, setValue] = useState("");

  function searchRistoranti() {
    console.log(value)
    searchRestarant(value)
      .then(function (ristoranti) {
        props.onSearchResult(ristoranti, value)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Cerca un locale"
        inputProps={{ "aria-label": "Cerca un locale" }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => { 
          searchRistoranti();
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
