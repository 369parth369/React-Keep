import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

// icons
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const StyledCard = styled(Card)`
width: 240px;
margin: 10px;
border; 1px solid;

`;

const Reminder = ({ note }) => {

    const { notes, setReminders, setArchiveNotes, setTrash, reminders} = useContext(DataContext);

    
    const archiveNotes = () => {
      const updatedNotes = reminders.filter(data => data.id !== note.id); // js filter function
      setReminders(updatedNotes); // filter function will return values in array
      setArchiveNotes(prevArr => [note, ...prevArr])
    }
    // const archiveNotes = () => {
    //   const updatedNotes = notes.filter(data => data.id !== note.id); // js filter function
    //   setArchiveNotes(updatedNotes); // filter function will return values in array
    //   setNotes(prevArr => [note, ...prevArr])
    // }
    const deleteNote = () => {
      const updatedNotes = reminders.filter(data => data.id !== note.id); // js filter function
      setReminders(updatedNotes); // filter function will return values in array
      setTrash(prevArr => [note, ...prevArr])
    }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions fontSize="small">
        {/* <NotificationsNoneOutlinedIcon 
            fontSize="small"
            onClick= {(note) => reminderNotes()} 
            /> */}
    
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

export default Reminder;


