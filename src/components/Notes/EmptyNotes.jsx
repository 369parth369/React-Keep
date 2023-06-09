import React from 'react'
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";

const Light = styled(LightbulbOutlinedIcon)`
font-size: 200px;
color: #F1F1F1;
`

const Text = styled(Typography)`
font-size: 25px;

`

const Container = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;
`

const EmptyNotes = () => {
  return (
  <Container>
    <Light/>
    <Text>Notes you add appears here</Text>


  </Container   >
  )
}

export default EmptyNotes
