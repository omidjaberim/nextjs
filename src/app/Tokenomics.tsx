import React from 'react';
import { Box, styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Image from "next/image";

const Container = styled(Box)(({theme})=>({  
display: 'flex',
padding: '0px 125px',
flexDirection: 'column',
alignItems: 'center',
gap: '40px',
alignSelf: "stretch",
[`@media (max-width: ${theme.breakpoints.values.sm}px)`]:{       
    padding: "80px 16px",
    paddingBottom:"80px",
}
}));






const Title =  styled(Typography)(({})=>({  
    textAlign: "center",
    lineHeight: "44px", 
    background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
    backgroundClip:'text',
    })
)

const tokenShareData = [
    {
        type: "Ecosystem",
        percentage :"26%" ,
    },
    {
        type: "Community",
        percentage :"4%" ,
    },    {
        type: "Reserve",
        percentage :"5%" ,
    },    {
        type: "Advisors",
        percentage :"4%" ,
    },    {
        type: "Staking",
        percentage :"8%" ,
    },    {
        type: "Development",
        percentage :"7%" ,
    },    {
        type: "Marketing",
        percentage :"10%" ,
    },    {
        type: "Team",
        percentage :"10%" ,
    },    {
        type: "Liquidity",
        percentage :"10%" ,
    },    {
        type: "Private Sale",
        percentage :"2%" ,
    },    {
        type: "Presale",
        percentage :"10%" ,
    },    {
        type: "Public Sale",
        percentage :"4%" ,
    },   
    
]
const Tokenomics = ()=>{
    return(
        <Container id="tokenomics" className="bg-[#000]  flex flex-col py-[72px] " >
           <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"} >Tokenomics</Title>
            <Grid className='flex justify-center relative w-full' >
                <Image src='/circle.jpg' alt="" width={350} height={350} />
                <Grid className='absolute top-0 right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >26%</span>
                    <span className='p-1 px-3' >Ecosystem</span>
                </Grid>
                <Grid className='absolute top-10 right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >4%</span>
                    <span className='p-1 px-3' >Community</span>
                </Grid>
                <Grid className='absolute top-20 right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >5%</span>
                    <span className='p-1 px-3' >Reserve</span>
                </Grid>
                <Grid className='absolute top-[100px] right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >4%</span>
                    <span className='p-1 px-3' >Advisors</span>
                </Grid>
                <Grid className='absolute top-[130px] right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >8%</span>
                    <span className='p-1 px-3' >Staking</span>
                </Grid>
                <Grid className='absolute top-[160px] right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >7%</span>
                    <span className='p-1 px-3' >Development</span>
                </Grid>
                <Grid className='absolute top-[190px] right-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >10%</span>
                    <span className='p-1 px-3' >Marketing</span>
                </Grid>
                <Grid className='absolute top-0 left-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >10%</span>
                    <span className='p-1 px-3' >Team</span>
                </Grid>
                <Grid className='absolute top-10 left-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >10%</span>
                    <span className='p-1 px-3' >Liquidity</span>
                </Grid>
                <Grid className='absolute top-20 left-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >2%</span>
                    <span className='p-1 px-3' >Private Sale</span>
                </Grid>
                <Grid className='absolute top-[160px] left-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >10%</span>
                    <span className='p-1 px-3' >Presale</span>
                </Grid>
                <Grid className='absolute top-[190px] left-[256px] font-bold py-1 rounded-xl text-black bg-[#fff] z-10 border-1 border-silver' >
                    <span className='border-r p-1 pl-3 pr-1 border-r-1 border-silver' >4%</span>
                    <span className='p-1 px-3' >Public Sale</span>
                </Grid>                
            </Grid>
        </Container>
    )
}
export default Tokenomics;