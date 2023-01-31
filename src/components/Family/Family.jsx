import React from "react";
import Typography from "@mui/material/Typography";
import CustomiseButton from "../Button/Button";
import UserImg from "../../assets/images/Mask-Group-2.png"
import "./Family.css";
import UserIcon from "../../assets/images/user-normal-icon.svg"
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

export default function Family() {
  const data = [
    {
      name:"John Smith",
      type:"ADMIN"
    },
    {
      name:"John Smith",
      type:"MEMBER"
    },
    {
      name:"Dianne Russell",
      type:"MEMBER"
    },
    {
      name:"Lisa Smith",
      type:"MEMBER"
    },
    {
      name:"Sean Michaletz",
      type:"MEMBER"
    },
    {
      name:"John Smith",
      type:"MEMBER"
    },
    {
      name:"John Smith",
      type:"MEMBER"
    },

  ];
  const theme = createTheme({
    palette: {
      error: {
        main: "#CAD7F5",
      },
      info: {
        main: "#FFFFFF",
      },
    },
  });
  return(
    <ThemeProvider theme={theme}>
      <Box className='family-box' px={4} py={3} sx={{borderRadius:"6px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb:2}}>
          <Typography variant="h6">
                    Family
          </Typography>
          <CustomiseButton className={"green-color button"} text={"Add New"} size={"sm"}/>
        </Box>
        <div className='family-users'>
          {data.map((item, index)=>{
            return(
              <div key={index} className={`family-user-box ${item.type === "MEMBER" ?"blue-color" : "yellow-color"}`}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img src={UserImg} alt="UserImg"/>
                  <Typography sx={{ml:2,fontSize:"16px",fontWeight:"500"}} >{item.name}</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
                  {/*<Chip color={item.type === 'MEMBER' ? '#000' : "#ffffff"}/>*/}
                  <Chip label="primary" color={item.type === "MEMBER" ? "error" :"info"} sx={{borderRadius:"4px"}} />
                  {item.type === "ADMIN" && <Typography sx={{background:"#ffffff",display:"flex"}} py={1} px={1} ml={1} ><img src={UserIcon} alt="UserIcon" width="13px"/></Typography>}
                </Box>
              </div>
            )
          })}
        </div>
      </Box>
    </ThemeProvider>
  )
}