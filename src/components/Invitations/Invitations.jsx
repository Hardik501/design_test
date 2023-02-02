import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import CustomiseButton from "../Button/Button";
import UserImg from "../../assets/images/Mask-Group-2.png"
import "./Invitations.css";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Check from "../../assets/images/Icon awesome-check.svg"
import Close from  "../../assets/images/Icon material-close.svg"

export default function Invitations() {
  const [toggle, setToggle] = useState(false)
  const data = {
    Sent:[
      {
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },
      {
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },{
        name:"You",
        member:"have invited johnsmith@gmail.com to become family member."
      },










    ],
    Received:[
      {
        name:"John Smith",
        member:"have invited you to become his family member."
      },
      {
        name:"John Smith",
        member:"have invited you to become his family member."
      },
      {
        name:"Dianne Russell",
        member:"have invited you to become his family member."
      },
      {
        name:"John Smith",
        member:"have invited you to become his family member."
      },
      {
        name:"Dianne Russell",
        member:"have invited you to become his family member."
      },
      {
        name:"John Smith",
        member:"have invited you to become his family member."
      },
    ]
  };
  const theme = createTheme({
    palette: {
      warning: {
        main: "#CAD7F5",
      },
      info: {
        main: "#FFFFFF",
      },
    },
  });
  const ChangeBtn =()=> {
    setToggle(!toggle);
  }
  return(
    <ThemeProvider theme={theme}>
      <Box className='invitation-box' px={4} py={4} sx={{borderRadius:"6px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb:2}}>
          <Typography variant="h6">
                        Invitations
          </Typography>
          <Box sx={{backgroundColor:"#DBDBDB" , borderRadius:"70px",display:"flex"}}>
            <div className={!toggle && "arrow"}><CustomiseButton className={!toggle ? "yellow-color-btn active button" : "yellow-color-btn button"} onClick={ChangeBtn} text={`Sent (${data?.Sent?.length})`} size={"sm"}/></div>
            <div className={toggle && "arrow"}><CustomiseButton className={toggle ? "yellow-color-btn active button" : "yellow-color-btn button"} onClick={ChangeBtn} text={`Received (${data?.Received?.length})`} size={"sm"}/></div>
          </Box>
        </Box>
        <div className='family-users'>
          {(toggle ? data.Received : data.Sent).map((item, index)=>{
            return(
              <div key={index} className={"family-user-box blue-color"}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  {item.name === "You" ? null : <img src={UserImg} alt="UserImg"/>}
                  <Typography sx={{ml:2,fontSize:"14px",fontWeight:"500",textAlign:"start"}} className="inner-text" ><Typography variant='string' sx={{color:"#F8991F"}}>{item.name}</Typography>  {item.member}</Typography>
                </Box>
                {item.name === "You" ? null :<Box sx={{minWidth:"85px",display:"flex",justifyContent:"space-between"}}>
                  {item.name === "You" ? null : <CustomiseButton className={"green-color button icon-btn"} text={
                    <img src={Check} alt=""/>}  size="large" />}
                  {item.name === "You" ? null : <CustomiseButton className={"button icon-btn"} text={
                    <img src={Close} alt=""/>} color={"error"} size="large" />}
                </Box>}
              </div>
            )
          })}
        </div>
      </Box>
    </ThemeProvider>
  )
}