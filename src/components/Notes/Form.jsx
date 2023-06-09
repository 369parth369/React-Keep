import React from 'react'
import { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener} from "@mui/material"
import { styled } from "@mui/material/styles";
import { v4 as uuid} from 'uuid'; // v4 is a component, uuid is alias name

import { DataContext } from '../../Context/DataProvider'; 


const Container = styled(Box)`
       
        display: flex;
        flex-direction: column;
        width: 550px;
        box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        justify-content: center;
        margin: 0 auto;
        min-height: 25px;
`

const note = { 
    id: '',
    heading: '',
    text: ''
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false);

    const { setNotes } = useContext(DataContext); // notes for only console purpose, no need
    const [addNote, setAddNote] = useState({note, id: uuid()})
    // why do we use array to create = becasue multiple set of data (notes) we have to store
    // here we have pushed notes in addnote wil update this ({notes, id: uuid()}) value

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '80px'
    }

    const handleClickAway = () => {
            setShowTextField(false);
            containerRef.current.style.minHeight = '30px'   
            setAddNote({ ...note, id: uuid() }) // to empty the textfield again when we click anyehere 

            if (addNote.heading || addNote.text) // when we dont want to print empty array {
              setNotes(prevArr => [addNote, ...prevArr]); // to save the value in setNotes..
              // console.log(notes) // for console print otherwise no needed         
          }
          
    
    const containerRef = useRef();  

  const onTextChange = (e) => {
    console.log(e.target.name, e.target.value)
    let changeNote = { ...addNote, [e.target.name]: e.target.value } // object addNote to 
    setAddNote(changeNote); // to push this changeNote into setAddNote // setAddNote
  
  }

  return (
  
  <ClickAwayListener onClickAway={handleClickAway}>
   
  <Container ref={containerRef}> 
    { showTextField &&
    <TextField 
        label="Title"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        style ={{marginBottom: 10 }}
        onChange = {(e) => onTextChange(e)} // e=event to target the value & data
        name= "heading"
        value= {addNote.heading} />
    }
    <TextField placeholder="Take a note"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        multiline
        maxRows={Infinity}
        onClick={onTextAreaClick}
        onChange = {(e) => onTextChange(e)}
      name= "text"
      value= {addNote.text} 
    />  
   </Container>
   </ClickAwayListener>
  
  )
}

export default Form

 // label  will show small size label at top side
  // style object created for give margin ( cannot pass this directly) 
  {/* // placeholder = it provides text till u click at text-field
multiline for cursor go to nextline if we press enter */}
     // box/container to wrap the to label 
     // showTextField = set true false, decided which textfields will be visible first
     // onTextAreaClick move the cursor to desire point or place
     // ClickAwayListener = when cursor click any other point of screen what should be done it handle>