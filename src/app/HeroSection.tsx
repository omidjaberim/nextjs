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


const Hero = (props:{t:any}) => {
  const {t} = props;
  return (
    <Grid id='Technology'  className='bg-[#000] w-full flex flex-col px-4 py-[60px] items-center'  >
      <div className='mt-[6px] lg:mt-0 w-full  flex flex-col max-w-[1440px]' >
        <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium mt-[2px] mb-[25px]"}  >{t('Technological Foundations')}</Title>
        <Grid className='w-full flex  flex-wrap justify-center gap-5 mt-[29px]' >
        <CardStyle 
            className={`z-10  w-full md:w-[424px] bg-[#11121A] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}            
          >
              <div className="w-full bg-black rounded-lg" >
              <Image src="/aif.jpg" alt="" width={385} height={160}  className="mx-auto" />
              
              </div>
              <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>
                {t('Virtual Reality')}                
              </Typography>
          <div className='text-[#ced0d6] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
                {t('embodies the essence of a second life')}                
              </div>
          </div>
        </CardStyle>
        <CardStyle 
            className={`z-10  w-full md:w-[424px]  bg-[#11121A] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}
            
          ><div className="w-full bg-black rounded-lg" >
              <Image src="/vrf.jpg" alt="" width={157} height={160}  className="mx-auto" />
              </div>
              <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>{t('Blockchain')}</Typography>
              <div className=' text-[#ced0d6] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
                {t('blockchain is essential for asset ownership')}
              </div>
          </div>
        </CardStyle>
        <CardStyle 
            className={`z-10  w-full md:w-[424px]  bg-[#11121A] hover:scale-105 transition-all font-Oxanium md:h-[652px] `}
            
          ><div className="w-full bg-black rounded-lg" >
            <Image src="/bcf.jpg" alt="" width={262} height={330}  className="mx-auto" />
            </div>
            <Typography className='font-Oxanium px-[16px]' component={'span'} color={"#B887FF"}  fontSize="20px" fontStyle={"normal"} fontWeight={"600"} lineHeight={"42px"}>{t('Artificial Intelligence (AI)')}</Typography>          
            <div className=' text-[#ced0d6] text-[16px] leading-7 flex flex-col px-[16px]' >            
              <div  className='flex justify-start items-baseline' >
                {t('AI is vital for overseeing and managing the META-V metaverse ecosystem')}              
              </div>
            </div>
        </CardStyle>
        </Grid>
      </div>
    </Grid>
  );
};
export default Hero;
