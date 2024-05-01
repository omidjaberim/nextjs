
import React from 'react';
import { Box,  styled } from '@mui/system';
import { Typography } from '@mui/material';
import Image from "next/image"
import arrowImage from "@/assets/ArrowUp.png"
import { Grid } from '@mui/material';


const Gradient = styled(Box)(({  }) => ({
  zIndex:0,
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "75%",
  height: "50%",
  transform: "translate(-50%, -50%)",
  flexShrink: "0",
  borderRadius: "50%",
  opacity: "0.36",
  background: "var(--gr3, linear-gradient(93deg, #5659C4 0.48%, #D8A1BC 100%))",
  filter: "blur(77px)",
  '&:nth-child(1)': {
   display:"none"
  },

  [`@media (max-width: 1440px)`]: {
    top:"50%",
    width:"50%",
    height:"60%",
  },

  [`@media (max-width: 980px)`]: {
    top:"50%",
    width:"50%",
    height:"80%",
  },
  [`@media (max-width: 340px)`]: {
  top:"8%",
  left:"0%",  
  width:"200px",
  height:"200px",  
  filter: "blur(47px)",
  borderRadius: "297px",
  '&:nth-child(1)': {
    display:'block',
    position: 'absolute',
    top: '100%',
    left:'110%'
  },
  },
}));

const Title =  styled(Typography)(({})=>({  
width: "100%",
textAlign: "center",
fontSize: "36px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "44px", 
background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
WebkitBackgroundClip:'text',
WebkitTextFillColor:'transparent',
backgroundClip:'text',
}))

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
const Card = ({title,subtitle,points,mt}:{title:string;subtitle:string;points:any[];mt:string})=>{
    return (
      <CardStyle 
          className={`  w-full md:w-[224px] bg-[url('/roadmapNoise.png')] bg-cover bg-black hover:scale-105 transition-all font-Oxanium md:h-[380px] `}
          sx={{marginTop:{xs:0,xl:mt}}} 
        >
        <Grid className="flex gap-[8px] items-stretch">
            <Image alt='' src={arrowImage} width={24} height={24} />
            <Typography component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{title}</Typography>
        </Grid>
        <Typography component={'div'}  color={"#FFF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"32px"}>{subtitle}</Typography>
        <ol className='pl-[16px] text-[#9A9DAB] text-[16px] leading-7 flex flex-col' >
        {points.map((point:any,index:number)=>{
            return <li key={point+index} className='flex justify-start items-baseline' ><div className=' mr-2 rounded-[5px] w-[5px] p-[4px] bg-[#9A9DAB]' ></div> {point}</li>
        })}   
        </ol>
      </CardStyle>
    )
} 

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
          <Grid id='roadmap'  className='w-full  flex flex-col px-4 py-[60px] items-center  '  >
            <Grid  className="w-full h-full backdrop-blur-xl backdrop-brightness-150 bg-[url('/horizontalLineBg.svg'),url('/verticalLineBg.svg')] bg-top bg-no-repeat" >
              <div className='mt-[216px] lg:mt-0 w-full h-full flex flex-col' >
                  <Title className='my-[80px]' >RoadMap</Title>
                  <Grid className='w-full flex flex-wrap justify-center gap-5' >
                  {
                      roadMapData.map((data,index)=>{
                      return <Card mt={index % 2 ? "280px":"0px" } key={index} title={data.title} subtitle={data.subtitle} points={data.points} />
                      })
                  }
                  </Grid>
                  <Gradient/>
              </div>
            </Grid>
          </Grid>
    )
}

export default Roadmap