import React from "react";
import { Box,  styled, useMediaQuery } from "@mui/system";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import PresaleBox from "@/app/components/PresaleBox";
import Image from "next/image"
import AuditImg from "@/assets/audit.png"


const PresaleSection = ()=>{
    const typoStyle = {
      color: "#FFF",
      textAlign: "center",
      /* Heading/1 */
      fontSize: { lg :"54px" , xs:"40px", xl:"54px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "110%",
    };
    const subTypeStyle = {
      marginTop : "16px",        
      color:  "#D7D8DD",
      textAlign: "center",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "140%"
    }

    return (
      <Grid className="w-full backdrop-blur-xl backdrop-brightness-150 bg-[url('/horizontalLineBg.svg'),url('/verticalLineBg.svg')] bg-top bg-no-repeat  " 
          sx={{fill:"linear-gradient(270deg, rgba(11, 11, 12, 0.64) 0%, rgba(34, 35, 38, 0.64) 21.5%, rgba(34, 35, 38, 0.64) 76.5%, rgba(1, 2, 10, 0.34) 100%)"}} >            
        <Grid className="w-full flex sm:h-[1140px] lg:h-[1140px] backdrop-brightness-150 bg-gradient-to-b from-[rgba(187,143,238,0.7)]  to-black "   >
          <Grid className="w-full relative px-[16px]  md:px-0 bg-[url('/Background/Background/background.png')] bg-no-repeat bg-top" >            
            <div 
              id="presale" 
              className="w-full font-Roboto flex justify-center items-center flex-col relative px-1"
              >
                <div className="w-full  inset-0 z-0" >
                  <Image alt="bg" src={"/star-img.svg"} width={24} height={24} className="absolute z-50 top-[32%] left-[10%]" style={{animation: 'pulse 2.2s cubic-bezier(0.4, 1, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star3.svg"} width={22} height={22} className="absolute z-50 top-[52%] left-[35%]" style={{animation: 'pulse 2.3s cubic-bezier(0.4, 1, 0.6, 1) infinite'}}/>
                  <Image alt="bg" src={"/star2.svg"} width={16} height={16} className="absolute z-50 top-[72%] left-[15%]" style={{animation: 'pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star3.svg"} width={22} height={22} className="absolute z-50 top-[92%] left-[3%] " style={{animation: 'pulse 3.6s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star-img.svg"} width={28} height={28} className="absolute z-50 top-[12%] right-[4%] " style={{animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star3.svg"} width={16} height={16} className="absolute z-50 top-[32%] right-[8%]" style={{animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star2.svg"} width={14} height={14} className="absolute z-50 top-[82%] right-[18%] " style={{animation: 'pulse 2.8s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                  <Image alt="bg" src={"/star3.svg"} width={18} height={18} className="absolute z-50 top-[92%] right-[38%] " style={{animation: 'pulse 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                </div>
                <div  className="z-20 pb-1 mt-[110px] flex flex-col items-center">
                    <Typography  sx={typoStyle} className="flex-col md:flex-row leading-relaxed font-Oxanium" display={"flex"} flexWrap={"wrap"}  gap={{ xs:"2px", md:"2px", xl:"8px" }} width={"100%"} justifyContent={"center"}>
                    <Grid component="span" className="text-[48px]" whiteSpace={"nowrap"} ml={{lg:"8px" ,xs:"8px"}}  >META-V,</Grid>  
                    <Grid component="span" className="text-[48px]"  ml={{lg:"8px" ,xs:"8px"}} >Epitomizes a</Grid>  
                    <Grid component="span" className="text-[48px]"  ml={{lg:"8px" ,xs:"8px"}} sx={{
                            color: "rgba(256,256,256,0.16)",
                        WebkitTextFillColor: "rgba(256,256,256,0.16)",
                        WebkitTextStroke: "1px white",
                    }} >Secound Life</Grid>
                    </Typography>
                    <Typography  sx={subTypeStyle} className="font-Oxanium"  >
                        The convergence of reality and innovation, where aspirations are converted into digital realms.
                    </Typography>
                    <Button className=" flex justify-center items-center p-[5px] mt-[24px] mb-[40px] text-white leading-5 font-bold text-[24px]" >
                        <Image src={AuditImg} alt="" width={82} height={34} className="cursor-pointer" />
                    </Button>
                </div>
                <PresaleBox />
            </div>
          </Grid>
        </Grid>
      </Grid>
      )
} 

export default PresaleSection;