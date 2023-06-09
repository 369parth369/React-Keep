
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

// icons
import { RestoreFromTrashOutlined as Restore } from "@mui/icons-material";
import { DeleteForeverOutlined as Delete} from "@mui/icons-material";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 10px;
  border: 1px solid;
`;

const DeleteNote = ({ note }) => {
  const { setNotes, trash, setTrash } =
    useContext(DataContext);


  const restoreNote = (note) => {
    const updatedNotes = trash.filter((data) => data.id !== note.id);
    setTrash(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedTrash = trash.filter(data => data.id !== note.id);
    setTrash(updatedTrash);
  };
  

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions fontSize="small">
      <Delete fontSize="small" onClick={() => deleteNote(note)} />
      <Restore fontSize="small" onClick={() => restoreNote(note)} />

      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
