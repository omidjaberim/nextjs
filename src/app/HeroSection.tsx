import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";


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


const Hero = () => {


  return (
    <Grid id='Technology'  className='bg-[#11121A] w-full flex flex-col px-4 py-[60px] items-center'  >
      <div className='mt-[6px] lg:mt-0 w-full  flex flex-col max-w-[1440px]' >
        <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"}  >Technological Foundations of META-V</Title>
        <Grid className='w-full flex  flex-wrap justify-center gap-5 mt-[29px]' >
        <CardStyle 
            className={`z-10  w-full md:w-[424px] bg-[#000] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}            
          >
              <Image src="/vrf.jpg" alt="" width={157} height={160}  className="mx-auto" />
              <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>
                Virtual Reality (VR)
              </Typography>
          <div className='text-[#9A9DAB] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
                META-V embodies the essence of a second life, a realm where dreams once confined to the realm of aspiration in the real world
              </div>
          </div>
        </CardStyle>
        <CardStyle 
            className={`z-10  w-full md:w-[424px]  bg-[#000] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}
            
          >
              <Image src="/aif.jpg" alt="" width={385} height={160}  className="mx-auto" />
              <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>Blockchain</Typography>
              <div className=' text-[#9A9DAB] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
                In META-V, blockchain is essential for asset ownership, transactions, and governance. Smart contracts secure and automate blockchain transactions. NFTs represent unique digital assets like virtual land, items, and artworks. Blockchain's transparency and immutability foster trust in META-V's economy. The META-V token (MV) facilitates transactions for virtual goods, services, assets, and digital economic activities.
              </div>
          </div>
        </CardStyle>
        <CardStyle 
            className={`z-10  w-full md:w-[424px]  bg-[#000] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}
            
          >
            <Image src="/bcf.jpg" alt="" width={262} height={330}  className="mx-auto" />
            <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>Artificial Intelligence (AI)</Typography>          
            <div className=' text-[#9A9DAB] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
              AI is vital for overseeing and managing the META-V metaverse ecosystem. It enforces governance, regulations, and ensures order, security, and fairness. AI provides personalized user experiences and helps users find desired activities. It consistently improves the ecosystem and ensures META-V is dynamic and user-centric.
              </div>
            </div>
        </CardStyle>
        </Grid>
      </div>
    </Grid>
  );
};
export default Hero;
