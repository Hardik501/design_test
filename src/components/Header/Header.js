// import { Navbar,Typography , MobileNav, Button} from "@material-tailwind/react";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Drawer,
  IconButton,
  Avatar,
  Menu,
  MenuList,
  Container, Button
} from "@mui/material";
import "./style.css"
import submenu from "../../assets/images/Component330.svg"
import React, {useState, useEffect} from "react";
// import notification from '../Icons/notification.png'
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import UserIcon from "../../assets/images/Mask-Group-2.png"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Profileimg from "../../assets/images/Profileimg.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import {List, ListItem, ListItemText} from "@mui/material";
export default function Header() {
  const [isDrawer, setIsDrawer] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuList, setMenuList] = useState(false);
  const [submenuList, setSubMenuList] = useState(false);
  const [indexs, setIndexs] = useState(false);
  const [data, setData] = useState();
  const [editPhoto, setEditPhoto] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 992) {
      setIsDrawer(false);
    } else if (windowWidth <= 1024) {
      setIsDrawer(true);
    } else {
      setIsDrawer(false);
    }

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1024) {
        setIsDrawer(false);
      } else if (width <= 1024) {
        setIsDrawer(true);
      } else {
        setIsDrawer(false);
      }
    });
  }, []);
  const HandleImageSetting =()=> {
    setEditPhoto(!editPhoto);
  }
  const subList=[{name:"Menu 1",list: ["My Programs","New Programs", "Program Invites", "Program Request"]},
    {name:"Menu 2",list: ["My Programs1","New Programs1", "Program Invites1", "Program Request1"]},
    {name:"Menu 3",list: ["My Programs2","New Programs2", "Program Invites2", "Program Request2"]}]
  const handleMenuData = (e, name)=>{
    console.log("e", e)
    setMenuList(!menuList)
    setData(name)
    setAnchorEl(e.currentTarget)
  }
  const matches1 = useMediaQuery("(max-width:767px)");
  const navList = (
    subList.map((item, index)=>(
      <Typography key={index}>

        <MenuItem
          aria-owns={ menuList ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={(e)=>{handleMenuData(e, item.name)}}
          className="textStyle">{matches1 && <img src={submenu} alt=""/>}{item.name}
        </MenuItem>
        <Menu open={item.name === data && menuList}
          onClose={()=>setMenuList(false)}
          id="simple-menu"
          anchorEl={anchorEl}
          onRequestClose={()=>setMenuList(false)}
          style={{top:35}}
        >
          <div className="subMenu" onMouseLeave={()=>setMenuList(false)}> { item.list.map((list, i)=>(<MenuItem key={i} className="list" >
            {list}
          </MenuItem>))}</div>
        </Menu>
      </Typography>
    ))
  );
  const handleData = (i)=>{
    setIndexs(i);
    setSubMenuList(!submenuList)
  }
  const isMobile = (
    <>
      <Drawer
        className='drawer-main'
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}>
        <Container className="drawer">
          <div className="div">
            <div className="responsiveHeader">
              <Typography className="mobileResponsiveLogo">
                            Logo
              </Typography>
              <Button variant="contained"  onClick={()=>setOpenDrawer(false)} className="button" style={{minWidth:"30px",padding: "6px",backgroundColor:"#F7F7F7",color:"#000000"}}>
                <CloseIcon/>
              </Button>
            </div>

            <IconButton className="mobileResponsiveAvtar">
              <div className={editPhoto ?"Profile-photo add-border":"Profile-photo"} role='presentation' onKeyDown={HandleImageSetting} onClick={HandleImageSetting}>
                <img src={Profileimg} style={{display:"block"}} alt="Profile-img"/>
                <div className={"edit"} >{!editPhoto ? <CameraAltOutlinedIcon  style={{fontSize:"18px",color:"gray"}}/> : <CameraAltOutlinedIcon  style={{fontSize:"18px",color:"#F8991F"}}/>}</div>
                {editPhoto&&
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
              <div className="username"><p className="name">Jhon Smith</p>
                <div><span className="location">Main St. Farmington, CA 123</span></div></div>


            </IconButton>
            {subList.map((item, index)=>(
              <Typography component={"div"} key={index} className="menulist">
                <MenuItem className="menuItemList"
                  onClick={()=>handleData(index)}><div className="list-items-box"><img style={{marginRight:"15px"}} src={submenu} alt=""/>{item.name}</div>{!item.list?.length ? null : item.list?.length && submenuList  && indexs === index ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
                </MenuItem>
                {submenuList  && indexs === index && <MenuList className="sublist">
                  { item.list.map((list, i)=>(<MenuItem key={i} >
                    {list}
                  </MenuItem>))}
                </MenuList>}
              </Typography>
            ))}
          </div>
        </Container>
      </Drawer>
      <IconButton className='menuIcon' onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Typography className="logo">
                Logo
      </Typography>
    </>
  )
  return (
    <AppBar className="headerColor">
      <Toolbar>
        { !isDrawer ?
          <>
            <Typography className="logo">
                           Logo</Typography>
            <div className="navBar">
              {navList}
            </div>
          </>:isMobile}
        <IconButton className="avtar" style={{right:!isDrawer ? "40px":"20px"}}>
          <NotificationsNoneIcon style={{color:"#ffffff", marginRight:"20px"}}/>
          <Avatar alt="" src={UserIcon} />
        </IconButton>
      </Toolbar>

    </AppBar>
  );
}
