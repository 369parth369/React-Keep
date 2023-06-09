import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StyledCard = styled(Card)`
width: 300px;
margin: 10px;
border; 1px solid;
`;

const Note = ({ note }) => {

    const { notes, setNotes, setReminders, setArchiveNotes, setTrash} = useContext(DataContext);

    const reminderNotes = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id); // js filter function
        setNotes(updatedNotes); // filter function will return values in array
        setReminders(prevArr => [note, ...prevArr])
    }
 
    const archiveNotes = () => {
      const updatedNotes = notes.filter(data => data.id !== note.id); // js filter function
      setNotes(updatedNotes); // filter function will return values in array
      setArchiveNotes(prevArr => [note, ...prevArr])
    }
    const deleteNote = () => {
      const updatedNotes = notes.filter(data => data.id !== note.id); // js filter function
      setNotes(updatedNotes); // filter function will return values in array
      setTrash(prevArr => [note, ...prevArr])
    }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions fontSize="small">
        <NotificationsNoneOutlinedIcon 
            fontSize="small"
            onClick= {(note) => reminderNotes()} 
            />
        <ArchiveOutlinedIcon 
            fontSize="small"
            onClick= {(note) => archiveNotes()}   
            />
        <DeleteOutlineOutlinedIcon 
            fontSize="small"  
            onClick= {(note) => deleteNote()}  
            />
      </CardActions>
    </StyledCard>
  );
};

export default Note;


