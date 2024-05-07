import React from "react";
import {
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PresaleBox from "@/app/components/PresaleBox";
import Image from "next/image"
import {StyledButton} from "./components/SmallComponents/AppComponents"
import TimerCountDown from "./components/SmallComponents/Timer";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { styled } from '@mui/system';

const PresaleSection = ()=>{
    const typoStyle = {
      color: "#FFF",
      /* Heading/1 */
      fontSize: { lg :"54px" , xs:"40px", xl:"54px"},
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "110%",
    };
    const subTypeStyle = {
      marginTop : "16px",        
      color:  "#D7D8DD",
      textAlign: "left",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "140%"
    }
    const Title =  styled(Grid)(({})=>({  
      background: 'linear-gradient(93deg, #ACA7FF 16.47%, #FED6FF 49.36%, #D7A3A9 81.61%)',
      WebkitBackgroundClip:'text',
      WebkitTextFillColor:'transparent',
      backgroundClip:'text',
      })  
    )

    return (
      <Grid className="w-full max-w-[1440px] mx-auto py-[16px]" id="presale" 
        style={{backgroundSize:'30%,25%',
              backgroundPosition:'left 20% top 26%,right 15% top 28%',
              }} >          
            <Grid className="w-full flex  bg-black/33 relative "  >
              <Image src="/Ellipse02.svg" alt="" width={350} height={140} className="blur-xl absolute top-[16%] right-[60%]" />
              <Image src="/Ellipse01.svg" alt="" width={340} height={140} className="blur-xl absolute top-[12%] right-[24%]" />
              <Image src="/Ellipse03.svg" alt="" width={270} height={140} className="blur-xl absolute top-[10%] left-[12%]" />
              <Image src="/girl2.png" alt="" width={410} height={140} className="absolute top-0 right-[40%]" />              
              <Grid className="w-full relative px-[16px] md:px-0"  >            
                <div                
                  className="w-full font-Roboto flex flex-col lg:flex-row justify-center lg:justify-between  
                      items-center relative px-1"              
                  >
                    <div  className="z-20 pb-1 md:mt-[60px] flex flex-col items-center lg:items-start w-full lg:w-1/2">
                        <Grid  sx={typoStyle} className="w-full  flex-col items-center lg:items-start leading-relaxed font-Oxanium py-1 px-2 rounded-2xl" display={"flex"} flexWrap={"wrap"}  
                          gap={{ xs:"1px", md:"2px", xl:"8px" }} width={"100%"} >
                          <Title className="text-[70px] leading-[64px]"  ml={{lg:"8px" ,xs:"8px"}}  >META-V</Title>  
                          <Grid component="span" className="text-[40px] 2sm:text-[50px] leading-[64px]"  ml={{lg:"8px" ,xs:"8px"}} >Epitomizes a</Grid>  
                          <Grid component="span" className="text-[40px] 2sm:text-[50px] leading-[64px]"  ml={{lg:"8px" ,xs:"8px"}} sx={{
                                  color: "rgba(256,256,256,0.16)",
                                  WebkitTextFillColor: "rgba(256,256,256,0.16)",
                                  WebkitTextStroke: "1px white",
                          }} >Secound Life</Grid>
                        </Grid>
                        <Typography  sx={subTypeStyle} className="flex justify-start lg:text-start lg:w-full w-full 2sm:w-3/4 md:w-1/2 text-center  font-Oxanium  py-2 px-5 rounded-2xl"  >
                            The convergence of reality and innovation, where <br/> aspirations are converted into digital realms.
                        </Typography>                 
                        <Grid className="bg-[#000000a8] rounded-2xl py-[20px] px-[4px] mt-[26px]  md:ml-4" > 
                          <Stack
                            gap={{ xl: 2, md: 2}}
                            maxWidth={"100%"}
                            px={{ xs: 0, sm: 4 }}
                            width={"100%"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <Typography
                              variant="h1"
                              sx={{
                                color: "#EBE9ED",
                                textAlign: "center",
                              }}
                              className="font-Oxanium leading-7 font-bold text-[22px] animate-pulse	"
                            >
                              UNTIL PRICE INCREASE
                            </Typography>
                            <Grid width={"100%"} maxWidth="440px">
                              <TimerCountDown  />
                            </Grid>
                        </Stack>
                        </Grid>
                      <Grid className="flex justify-start my-[20px] flex-col-reverse gap-2 md:gap-0 md:flex-row " >   
                      <div className="flex" >                     
                        <div className=" flex justify-center  mx-auto md:ml-6 "  >
                            <StyledButton  >
                              <Link                                      
                                  href="https://twitter.com/META_V_Official" target="_blank" 
                                  style={{textDecoration:'none'}}  
                                  className="w-[120px] md:w-[30px]"
                                  >
                                  <TwitterIcon className="hover:scale-110 text-black" />
                              </Link>
                            </StyledButton>
                        </div>
                        <div className="flex justify-center  mx-2"  >
                            <StyledButton  >
                              <Link                                     
                                    href="https://t.me/META_V_Official" 
                                     target="_blank" style={{textDecoration:'none'}}  >
                               <TelegramIcon className="hover:scale-110 text-black  w-[120px] md:w-[30px]" />
                              </Link>
                            </StyledButton>
                        </div>
                        </div>
                        <div className="flex" >
                        <div className="flex justify-center  "  >
                            <StyledButton>
                              <Link 
                                    className=" text-[#131315] leading-7 font-bold text-[18px] font-Oxanium w-[120px] "  
                                    href="https://coinsult.net/projects/meta-v/" target="_blank" style={{textDecoration:'none'}}  >
                                White Paper
                              </Link>
                            </StyledButton>
                        </div>
                        <div className="flex justify-center mx-2"  >
                            <StyledButton>
                              <Link 
                                    className=" text-[#131315] leading-7 font-bold text-[18px] font-Oxanium w-[120px]"  
                                    href="https://coinsult.net/projects/meta-v/" target="_blank" style={{textDecoration:'none'}}  >
                                Audit
                              </Link>
                            </StyledButton>
                        </div>
                        </div>
                      </Grid>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" >
                      <PresaleBox />
                    </div>
                </div>
              </Grid>
            </Grid>          
      </Grid>
      )
} 

export default PresaleSection;