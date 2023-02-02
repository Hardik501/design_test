import React from "react";
import CustomiseButton from "../Button/Button";
import UserIcon from "../../assets/images/users-icon.svg"
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import "./Activities.css"
import Box from "@mui/material/Box";
export default function Activities() {
  const data = [
    {
      name:"Leslie Alexander updated her",
      type:"Account Type",
      time: "5 October 11:46 AM"
    },
    {
      name:"John Smith removed Mark Fleix from",
      type:"Family member",
      time: "5 October 10:01 AM"
    },
    {
      name:"Leslie Alexander updated her",
      type:"Account Type",
      time: "5 October 11:46 AM"
    },
    {
      name:"John Smith removed Mark Fleix from",
      type:"Family member",
      time: "4 October 11:00 AM"
    },
    {
      name:"Leslie Alexander updated her",
      type:"Account Type",
      time: "3 October 2:45 PM"
    },
    {
      name:"John Smith removed Mark Fleix from",
      type:"Family member",
      time: "3 October 2:45 PM"
    },
    {
      name:"Leslie Alexander updated her",
      type:"Account Type",
      time: "3 October 2:45 PM"
    },

  ];
  return(
    <Box className="activities-box" px={3} py={3} sx={{borderRadius:"6px"}}>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb:3}}>
        <Typography variant="h6">
                    Activities
        </Typography>
        <CustomiseButton className={"green-color button"} text={"View All"} size={"sm"}/>
      </Box>
      {/*<div>*/}
      {/*    {data.map((i,index)=>{*/}
      {/*        const check = data.length -1 === index*/}
      {/*        return(*/}
      {/*            <>*/}
      {/*                <div className='flex justify-start items-center'>*/}
      {/*                    <Typography*/}
      {/*                        className="inline-flex items-center justify-center border border-transparent text-sm font-medium rounded-full w-9 h-9 text-white bg-blue-100">*/}
      {/*                        <img src={UserIcon} alt="UserIcon"/>*/}
      {/*                    </Typography>*/}
      {/*                    <div className='ml-5 '>*/}
      {/*                        <Typography className='font-medium text-sm' variant='string'>*/}
      {/*                            {i.name}*/}
      {/*                            <span className='text-yellow-800'>*/}
      {/*                                {" "}{i.type}*/}
      {/*                            </span>*/}
      {/*                        </Typography>*/}
      {/*                        <div className='text-start'>*/}
      {/*                            <Typography color="#c7c7c7" className='text-sm text-start' variant='string'>*/}
      {/*                                {i.time}*/}
      {/*                            </Typography>*/}
      {/*                        </div>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*                {!check && <div className='column-row'/>}*/}
      {/*            </>*/}
      {/*        )*/}
      {/*    })}*/}
      {/*</div>*/}
      <Timeline position="right" sx={{p:"0px"}} className="timeline-activity">
        {data.map((item,index)=>{
          const check = data.length -1 === index
          return(
            <TimelineItem key={index}>
              <TimelineSeparator>
                {/*<TimelineConnector />*/}
                <TimelineDot className='set-Icon' color='primary' sx={{my:"5px"}}>
                  <img key={index} src={UserIcon} alt="" style={{maxWidth: "initial"}}/>
                </TimelineDot>
                {!check && <TimelineConnector />}
                {/*<TimelineConnector />*/}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "0px", px: 2 ,}}>
                <Typography variant="p" component="span" sx={{fontSize:"14px"}}>
                  {item.name}
                  <span style={{color:"#F8991F"}}>
                    {" "}{item.type}
                  </span>
                </Typography>
                <Typography sx={{fontSize:"14px",color:"#C7C7C7"}}>{item.time}</Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })}

      </Timeline>
    </Box>
  )
}