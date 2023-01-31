import React from "react";
import Typography from "@mui/material/Typography";
import MasterCardImg from "../../assets/images/mastercard-icon.png"
import "./BankAccont.css";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CustomiseButton from "../Button/Button";

export default function BankAccount() {
  const data = [
    {
      account_number:"123456789123",
      expiry_date:"09/27"
    },
    {
      account_number:"789456123789",
      expiry_date:"08/25"
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
      <Box className='bank-account' px={4} py={3} sx={{borderRadius:"6px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb:2}}>
          <Typography variant="h6">
                        Bank Account
          </Typography>
        </Box>
        <div className='bank-account-users'>
          {data.map((item, index)=>{
            return(
              <div key={index} className={"bank-account-user-box white-background"}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img src={MasterCardImg} alt="MasterCardImg" />
                  <Box sx={{padding:"19px 22px 17px 15px", display: "flex", flexDirection: "column", gap: "1px", textAlign: "left"}}>
                    <p className={"font-medium bank-account-black-color"}>**** **** {item.account_number.slice(8,12)}</p>
                    <p className={"font-medium bank-account-grey-color"}>Expires {item.expiry_date}</p>
                  </Box>
                  <CustomiseButton className={"green-color button appear-button"} text={"Edit"} size={"sm"}/>

                </Box>
              </div>
            )
          })}
        </div>
      </Box>
    </ThemeProvider>
  )
}