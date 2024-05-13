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
const Tokenomics = (props:{t:any})=>{
    const {t} = props;
    return(
        <Container id="tokenomics" className="bg-[#11121A]  flex flex-col py-[72px] " >
           <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium mt-[2px] mb-[25px]"} >{t("Tokenomics")}</Title>
            <Grid className='flex justify-center relative w-full' >
                <Image src='/tokenomics.png' alt="" width={880} height={850} />
            </Grid>
        </Container>
    )
}
export default Tokenomics;