import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import "./Profile.css";
import ProfileImg from "../../assets/images/Profileimg.png"
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { FormLabel, Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import CustomiseButton from "../Button/Button";

export default function Profile() {
  const [editPhoto, setEditPhoto] = useState(false);
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
  const HandleImageSetting =()=> {
    setEditPhoto(!editPhoto);
  }
  return(
    <ThemeProvider theme={theme}>
      <Box className='Profile-box' px={4} py={3} sx={{borderRadius:"6px"}}>
        <Grid className='Profile-photo-main'>
          <Grid>
            <div role='presentation' className={editPhoto ?"Profile-photo add-border":"Profile-photo"} onKeyDown={HandleImageSetting} onClick={HandleImageSetting}>
              <img src={ProfileImg} style={{display:"block"}} alt="Profile-img"/>
              <div className={"edit"} >{!editPhoto ? <CameraAltOutlinedIcon  style={{fontSize:"18px",color:"gray",marginTop:"4px"}}/> : <CameraAltOutlinedIcon  style={{fontSize:"18px",color:"#F8991F",marginTop:"4px"}}/>}</div>
              {editPhoto &&
                            <div className="edit-select">
                              <List style={{backgroundColor:"#232E3E",padding:"0px",borderRadius:"8px",color:"white",width:"100%",zIndex:"21"}}>
                                <ListItem style={{padding:"0"}} onClick={HandleImageSetting}>
                                  <ListItemText className={"menu-Items"} style={{padding:"10px",margin:"0",borderRadius:"8px 8px 0px 0px"}}>Upload Now</ListItemText>
                                </ListItem>
                                <ListItem  style={{padding:"0"}} onClick={HandleImageSetting}>
                                  <ListItemText className={"menu-Items"} style={{padding:"10px",margin:"0",borderRadius:"0px 0px 8px 8px "}} >Remove</ListItemText>
                                </ListItem>
                              </List>
                            </div>}
            </div>
          </Grid>
          <Grid className='Profile-Name'>
            <Grid className='Profile-Name-location'>
              <Typography variant="h6" >John Smith</Typography>
              <Typography variant="caption" display="block"><LocationOnIcon style={{fontSize:"15px"}}/>Main St. Farmington, CA 123</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid className='Profile-input-main'>
          <Grid  className="input-1">
            <Grid className="input-line">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.9",font: "normal normal normal 14px/16px Work Sans"}}>First Name:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  placeholder="First Name"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /></Grid>
            </Grid>
            <Grid className="input-line">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.9",font: "normal normal normal 14px/16px Work Sans"}}>Last Name:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  placeholder="Last Name"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /></Grid>
            </Grid>
            <Grid className="input-line media-email-none">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.9",font: "normal normal normal 14px/16px Work Sans"}}>Email:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  fullWidth
                  placeholder="Email"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /></Grid>
            </Grid>
          </Grid>
          <Grid  className="input-1" style={{paddingLeft:"20px"}}>
            <Grid className="input-line">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.8",font: "normal normal normal 14px/16px Work Sans"}}>Phone:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  placeholder="Phone"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid className="input-line">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.9",font: "normal normal normal 14px/16px Work Sans"}}>Graduation Year:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  placeholder="Graduation Year"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid className="input-line media-dob-none">
              <Grid className="input-Label"><FormLabel className="FullWidth" sx={{color:"black", textAlign:"left",lineHeight:"0.9",font: "normal normal normal 14px/16px Work Sans"}}>Date of Birth:</FormLabel></Grid>
              <Grid className="input-field">
                <TextField
                  placeholder="Date of Birth"
                  id="outlined-number"
                  className="form-input"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className='Profile-photo-button'>
          <Grid className="media-428-button-none">
            <CustomiseButton className={"profile-button "} color={"success"} text={"Save Changes"} size={"sm"}/>
            <CustomiseButton className={"profile-button dark "} color={"success"} text={"Change Password"} size={"sm"}/> 
            <CustomiseButton className={"profile-button "} color={"error"} text={"Leave Family"} size={"sm"}/> 
          </Grid>
          <Grid className="media-428-button">
            <CustomiseButton className={"profile-button dark "} text={"Edit"} size={"sm"}/> 
          </Grid>
        </Grid>
                
      </Box>
    </ThemeProvider>
  )
}