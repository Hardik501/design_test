import React from "react";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Family from "./components/Family/Family";
import Invitations from "./components/Invitations/Invitations";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BankAccount from "./components/BankAccount/BankAccount";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import Header from "./components/Header/Header";
import BillingAddress from "./components/BillingAddress/BillingAddress";
import Profile from "./components/Profile/Profile";
import Account from "./components/MyAccount/Account";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 90,
    width: "100%",
    backgroundColor: "#F8991F",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    padding: "12px",
    color: "#000000",
    "&.Mui-selected": {
      color: "#F8991F",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(248, 153, 31, 0.32)",
    },
  }),
);
function App() {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches1 = useMediaQuery("(max-width:428px)");
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Header/>

      <Box>
        {matches1 ?
          <Box sx={{ width: "100%" }}>
            <Account/>
            <TabContext value={value}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                sx={{ borderBottom: 1, borderColor: "divider" }}
                aria-label="secondary tabs example"
                scrollButtons
                centered
              >
                <StyledTab value="one" label="Profile" />
                <StyledTab value="two" label="Wallet" />
                <StyledTab value="three" label="Activities" />
                <StyledTab value="four" label="Invitations" />
              </StyledTabs>
              <TabPanel value="one">
                <Family isMobile={matches1} />
                <Profile/>
              </TabPanel>
              <TabPanel sx={{padding:"0px"}} value="two">
                <BankAccount/>
              </TabPanel>
              <TabPanel sx={{padding:"0px"}} value="three"><Activities/></TabPanel>
              <TabPanel sx={{padding:"0px"}} value="four"><Invitations/></TabPanel>
            </TabContext>
          </Box>
          :
          matches ?
            <Grid container sx={{padding:"20px"}} rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={7}>
                <Profile/>
              </Grid>
              <Grid item xs={5}>
                <Family/>
              </Grid>
              <Grid item xs={6}>
                <BankAccount/>
              </Grid>
              <Grid item xs={6}>
                <BillingAddress/>
              </Grid>
              <Grid item xs={6}>
                <Activities/>
              </Grid>
              <Grid item xs={6}>
                <Invitations/>
              </Grid>
            </Grid>
            :
            <>
              <Account/>
              <Box display="grid" className='grid_container'>
                <Box display="grid" className='main_container' item xs={4} sm={8} md={8} gap={2}>
                  <div className='profile_container'><Profile/></div>
                  <div className='account_container'><BankAccount/></div>
                  <div className='billing_container'><BillingAddress/></div>
                  <div className='activities_container'>
                    <Activities/>
                  </div>
                </Box>
                <Box display="grid" item xs={4} sm={8} md={8} gap={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Family/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Invitations/>
                  </Grid>
                </Box>
              </Box>
            </>
        }
      </Box>


    </div>
  );
}

export default App;
