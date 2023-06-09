import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 10px;
  border: 1px solid;
`;

const Archive = ({ note }) => {
  const {
    notes,
    setNotes,
    archiveNotes,
    setArchiveNotes,
    setReminders,
    setTrash
  } = useContext(DataContext);

  const reminderNotes = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setReminders((prevArr) => [note, ...prevArr]);
  };
  const UnarchiveNotes = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes)
    setNotes((prevArr) => [note, ...prevArr]);

  };

  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes)
    setTrash((prevArr) => [note]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions fontSize="small">
        <NotificationsNoneOutlinedIcon
          fontSize="small"
          onClick={() => reminderNotes(note)}
        />
        <UnarchiveOutlinedIcon fontSize="small" onClick={() => UnarchiveNotes(note)} />
        <DeleteOutlineOutlinedIcon fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;

