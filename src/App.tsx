import React from "react";
import "./App.css";
import SearchFieldComponent from "./components/search-field";
import ViewBlockComponent from "./components/view-block";
import { getListOfAlbums } from "./store/actions";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack spacing={2}>
      <SearchFieldComponent getListOfAlbums={getListOfAlbums}/>
      <ViewBlockComponent />
    </Stack>
  );
}

export default App;
