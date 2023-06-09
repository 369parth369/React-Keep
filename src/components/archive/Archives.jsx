import React from "react";

import { useContext } from "react"; // all notes are in usecontext
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// components

import Archive from "./Archive";

import { DataContext } from "../../Context/DataProvider"; // values will come from DataContext from DataProvider folder

const DrawerHeader = styled("div")(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "flex-end",
  // padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Archives = ({}) => {
  const { archiveNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Grid container style={{ marginTop: 10 }}>
            {archiveNotes.map((archive) => (
              <Grid>
                <Archive note={archive} />
              </Grid>
            ))
            }
          </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
