import React from "react";

import { Box, Container } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // for swipedrawer function work

// components
import SwipeDrawer from "./components/SwipeDrawer";
import Notes from "./components/Notes/Notes";
import Reminders from "./components/reminder/Reminders";
import EditLabels from "./components/editLabel/EditLabels";
import Archives from "./components/archive/Archives";
import DeleteNotes from "./components/trash/DeleteNotes";

const Homea = () => {
  return (
    <>
      <Box style={{ display: "flex", width: "100%" }}>
        <Container maxWidth="md"
        >
          <Router>
            <SwipeDrawer />
            <Routes>
              <Route path="/" element={<Notes />} />\
              <Route path="/reminder" element={<Reminders />} />
              <Route path="/editLabel" element={<EditLabels />} />
              <Route path="/archive" element={<Archives />} />
              <Route path="/trash" element={<DeleteNotes />} />
            </Routes>
          </Router>
        </Container>
      </Box>
    </>
  );
};

export default Homea;
