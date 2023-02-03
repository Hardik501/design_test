import React from "react";
import { useState } from "react";
import { Grid, List, ListItem, Button, ListItemText, useMediaQuery } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./index.css"

const Account = ()=>{
  const [tooltip,setTooltip] = useState();
  const matches = useMediaQuery("(max-width:767px)");
  const HandleTooltip = () => {
    setTooltip(!tooltip)
  }
  // const width = window.screen.width;
  return(<div className="account-Box">
    <span className="accountTitle">My Account</span>
    {!matches&&<div className='Success-box'>Success Message Here</div>}
    {!matches&&<Button className="accountViewButton">View Button</Button>}
    {matches&&<Grid>
      <div role='presentation' onClick={HandleTooltip} onKeyDown={HandleTooltip}><MoreHorizIcon/></div>
      {tooltip &&
                    <div className="edit-select-tooltip">
                      <ArrowDropUpIcon className="arrow-tooltip"/>
                      <List style={{backgroundColor:"#232E3E",padding:"0px",borderRadius:"8px",color:"white",width:"100%",zIndex:"21"}}>
                        <ListItem style={{padding:"0"}}>
                          <ListItemText className="menu-Items-tooltip" onClick={HandleTooltip} style={{padding:"10px",margin:"0",borderRadius:"8px 8px 0px 0px"}}>View Teams</ListItemText>
                        </ListItem>
                        <ListItem  style={{padding:"0"}}>
                          <ListItemText  className="menu-Items-tooltip" onClick={HandleTooltip} style={{padding:"10px",margin:"0",borderRadius:"0px 0px 8px 8px "}} >View Invoices</ListItemText>
                        </ListItem>
                      </List>
                    </div>}
    </Grid>}
  </div>);
};
export default Account;
