import React, { useState, useEffect } from "react";
import moment from "moment";
import {  Grid } from "@mui/material";

export default function TimerCountDown() {
const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  

  const startTime = async () => {
    let until = moment.unix(1718798293).format("x");
    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: Number(days),
          time_Hours: Number(hours),
          time_Minusts: Number(minuts),
          time_seconds: Number(seconds),
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, []);

  return (
      <Grid className="flex items-center justify-evenly w-full" >       
        <Grid  
          className="mx-4  rounded-[16px] " display="flex" flexDirection="column" alignItems="center"   >
            <Grid className="text-[28px] font-semibold	 md:text-3xl	pt-[6px] leading-6 md:leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >
              {countTime.time_days}              
            </Grid>
            <span className="text-[12px] leading-6 font-normal	text-white font-Oxanium">Day</span>          
        </Grid>
        <Grid  
          className="mx-4  rounded-[16px] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Grid className="text-[28px] font-semibold	md:text-3xl	pt-[6px] leading-6 md:leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >            
        
            {countTime.time_Hours}
            </Grid>
            <span className={"text-[12px]  leading-6 text-white"}>{"Hours"}</span>          
        </Grid>
        <Grid  
          className="mx-4 rounded-[16px] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Grid className="text-[28px] font-semibold	 md:text-3xl	pt-[6px] leading-6 md:leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >            
            
            {countTime.time_Minusts}
            </Grid>
            <span className={"text-[12px]  leading-6 text-white"}>{"Minutes"}</span>          
        </Grid>
        <Grid  
          className="mx-4 rounded-[16px] text-gradient-to-r from-[#FED3CA] to-[#FFA998]" display="flex" flexDirection="column" alignItems="center"   >
            <Grid className="text-[28px] font-semibold	 md:text-3xl	pt-[6px] leading-6 md:leading-10  bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text" >          
            
            {countTime.time_seconds}
            </Grid>
            <span className={"text-[12px]  leading-6 text-white"}>{"Seconds"}</span>          
        </Grid>
      </Grid>
  );
}
