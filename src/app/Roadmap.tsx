
import React from 'react';
import { Box,  styled } from '@mui/system';
import { Typography } from '@mui/material';
import Image from "next/image"
import arrowImage from "@/assets/ArrowUp.png"
import { Grid } from '@mui/material';

const Title =  styled(Typography)(({})=>({  
  textAlign: "center",
  lineHeight: "44px", 
  background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
  WebkitBackgroundClip:'text',
  WebkitTextFillColor:'transparent',
  backgroundClip:'text',
  })
)

const CardStyle = styled(Box)(({})=>({  
       display: "flex",       
       padding: "16px",
       flexDirection: "column",
       alignItems: "flex-start",
       gap: "4px",
       borderRadius: "12px",
       border: "1px solid  rgba(255, 255, 255, 0.05)",
       justifyItems:"start", 
}));


const roadMapData = [{
    title : "Phase 1",
    subtitle:"Foundation",
    points :["Market Research & Feasibility Study" ,"Business Model Development", "Document Preparation & Project Economy", "Smart Contract Development - Token, Presale Staking"],  
},{
    title : "Phase 2",
    subtitle:"Initial ",
    points :["Token Presale & Community Formation",
        "Dev & Release of Project Demo",
       "Selection of 10 Professions & Presale of First 10 NFTs"],  
},{
    title : "Phase 3",
    subtitle:"Initial Launch",
    points :["First Version Desktop App for 10 Users" , "Partnerships & Project Development", "Token Listing on DEX & CEX"],  
},{
    title : "Phase 4",
    subtitle:"Expansion",
    points :["Expansion of Professions and App Capacity",
        " Release of Mobile App"],  
},{
    title : "Phase 5",
    subtitle:"Integrating Advanced Tech",
    points :["AI Integration Metaverse Governance"," VR Integration Immersive Metaverse Experience"],  
}]

const Roadmap = ()=>{
    return (
          <Grid id='roadmap'  className='bg-[#000] w-full flex flex-col px-4 py-[60px] items-center'  >
              <div className='mt-[6px] lg:mt-0 w-full  flex flex-col' >
                  <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[12px]"}  >RoadMap</Title>
                  <Grid className='w-full xl:w-[1320px] flex flex-wrap justify-center mx-auto gap-10 md:h-[1360px] 2lg:h-[700px] mt-[29px] relative' >
                    <Grid 
                      className={`z-10 px-5 w-full  md:w-[514px] md:h-[202px]  bg-[#11121A] md:bg-[#000] 2lg:bg-transparent md:bg-[url('/hexagonal.svg')] bg-no-repeat md:bg-cover hover:scale-105 
                        transition-all font-Oxanium relative xl:absolute xl:top-0 xl:left-[180px] `}          
                    >
                      <div className='font-Oxanium text-center absolute py-2 px-20 
                              bg-[rgb(239,67,93)] top-[-20px] md:right-[26%] text-white font-bold '>
                        Foundation
                      </div>                
                      <Grid className='w-full flex justify-evenly' >
                      <div className='w-1/5 text-[rgb(239,67,93)] text-[30px] md:text-[60px] font-bold px-4 py-14' >
                          01
                      </div>  
                      <ol className='w-4/5 px-6 text-[#9A9DAB] text-[14px] leading-6 flex flex-col py-10' >        
                        <li  className='flex justify-start items-baseline' >
                          Market Research & Feasibility Study 
                        </li>
                        <li  className='flex justify-start items-baseline' >
                          Business Model Development 
                        </li>
                        <li  className='flex justify-start items-baseline' >
                          Document Preparation & Project Economy
                        </li>
                        <li  className='flex justify-start items-baseline' >
                          Smart Contract Development - Token, Presale Staking 
                        </li>            
                      </ol>
                      </Grid>
                    </Grid>
                    <Grid 
                      className={`z-10 px-5 w-full md:w-[514px] md:h-[202px]  bg-[#11121A] md:bg-[#000] xl:bg-transparent md:bg-[url('/hexagonal.svg')] bg-no-repeat md:bg-cover hover:scale-105 
                        transition-all font-Oxanium relative xl:absolute xl:top-[120px] xl:right-[180px] `}          
                    >
                      <div className='font-Oxanium text-center absolute py-2 px-20 
                              bg-[rgb(0,173,134)] top-[-20px] md:right-[30%] text-white font-bold '>
                        Initial
                      </div>                
                      <Grid className='w-full flex justify-evenly' >
                      <div className='w-1/5 text-[rgb(0,173,134)] text-[30px] md:text-[60px] font-bold px-4 py-14' >
                          02
                      </div>  
                      <ol className='w-4/5 px-6 text-[#9A9DAB] text-[14px] leading-6 flex flex-col py-14' >        
                        <li  className='flex justify-start items-baseline' >
                        Token Presale & Community Formation
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        Dev & Release of Project Demo
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        Selection of 10 Professions & Presale of First 10 NFTs
                        </li>                               
                      </ol>
                      </Grid>
                    </Grid>
                    <Grid 
                      className={`z-10 px-5 w-full md:w-[514px] md:h-[202px]  bg-[#11121A] md:bg-[#000] xl:bg-transparent md:bg-[url('/hexagonal.svg')] bg-no-repeat md:bg-cover hover:scale-105 
                        transition-all font-Oxanium relative xl:absolute xl:top-[240px] xl:left-[180px] `}          
                    >
                      <div className='font-Oxanium text-center absolute py-2 px-20 
                              bg-[rgb(36,177,255)] top-[-20px] md:right-[26%] text-white font-bold '>
                        Initial Launch
                      </div>                
                      <Grid className='w-full flex justify-evenly' >
                      <div className='w-1/5 text-[rgb(36,177,255)] text-[30px] md:text-[60px] font-bold px-4 py-14' >
                          03
                      </div>  
                      <ol className='w-4/5 px-6 text-[#9A9DAB] text-[14px] leading-6 flex flex-col py-16' >        
                        <li  className='flex justify-start items-baseline' >
                        First Version Desktop App for 10 Users
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        Partnerships & Project Development
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        Token Listing on DEX & CEX
                        </li>                                
                      </ol>
                      </Grid>
                    </Grid>
                    <Grid 
                      className={`w-full z-10 px-5 md:w-[514px] md:h-[202px]  bg-[#11121A] md:bg-[#000] xl:bg-transparent md:bg-[url('/hexagonal.svg')] bg-no-repeat md:bg-coverhover:scale-105 
                        transition-all font-Oxanium relative xl:absolute xl:top-[360px] xl:right-[180px] `}          
                    >
                      <div className='font-Oxanium text-center absolute py-2 px-20 
                              bg-[rgb(161,85,185)] top-[-20px] md:right-[26%] text-white font-bold '>
                        Expansion
                      </div>                
                      <Grid className='w-full flex justify-evenly' >
                      <div className='w-1/5 text-[rgb(161,85,185)] text-[30px] md:text-[60px] font-bold px-4 py-14' >
                          04
                      </div>  
                      <ol className='w-4/5 px-6 text-[#9A9DAB] text-[14px] leading-6 flex flex-col py-16' >        
                        <li  className='flex justify-start items-baseline' >
                        Expansion of Professions and App Capacity
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        Release of Mobile App
                        </li>
                        <li  className='flex justify-start items-baseline' >
                          Document Preparation & Project Economy
                        </li>                                 
                      </ol>
                      </Grid>
                    </Grid>
                    <Grid 
                      className={`w-full z-10 px-5 md:w-[514px] md:h-[202px]  bg-[#11121A] md:bg-[#000] xl:bg-transparent md:bg-[url('/hexagonal.svg')] bg-no-repeat md:bg-cover hover:scale-105 
                        transition-all font-Oxanium  relative xl:absolute xl:top-[480px] xl:left-[180px] `}          
                    >
                      <div className='font-Oxanium text-center absolute py-2 px-10 
                              bg-[rgb(255,145,25)] top-[-20px] md:right-[22%] text-white font-bold '>
                        Integrating Advanced Tech
                      </div>                
                      <Grid className='w-full flex justify-evenly' >
                      <div className='w-1/5 text-[rgb(255,145,25)] text-[30px] md:text-[60px] font-bold px-4 py-14' >
                          05
                      </div>  
                      <ol className='w-4/5 px-6 text-[#9A9DAB] text-[14px] leading-6 flex flex-col py-16' >        
                        <li  className='flex justify-start items-baseline' >
                        AI Integration Metaverse Governance
                        </li>
                        <li  className='flex justify-start items-baseline' >
                        VR Integration Immersive Metaverse Experience
                        </li>          
                      </ol>
                      </Grid>
                    </Grid>
                  </Grid>
            </div>
        </Grid>
    )
}

export default Roadmap