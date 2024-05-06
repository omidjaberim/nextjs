import React from 'react';
import aboutImage from "@/assets/about.svg";
import Image from "next/image"
import {   styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title =  styled(Typography)(({})=>({  
    textAlign: "center",
    lineHeight: "44px", 
    background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent',
    backgroundClip:'text',
    })
)

const About = ()=>{
  return (
    <section id='about' className={"w-full flex flex-col items-center bg-[#000] font-Oxanium pt-[62px]  "}  > 
        <div className=' max-w-[1440px] relative' >   
            <div className=' flex lg:flex-row lg:justify-between items-center  mx-auto flex-col  '>  
            <div className='flex flex-col items-center w-full h-[600px]' >
                    <Image src="/Ellipse02.svg" alt="" width={350} height={140} className="blur-xl absolute top-[16%] left-20 z-10" />                    
                    <Image src="/Ellipse01.svg" alt="" width={270} height={140} className="blur-xl absolute top-[29%] right-20 z-10" />
                <div className={"w-full flex justify-center items-center mt-[10px] z-20"} >
                    <img src={aboutImage.src} className="w-[108.097px] h-[34px] mr-[4px] md:w-[90.097px] md:h-[24px] md:mx-[4px]" alt="about"/>
                    <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"}>META-V</Title>            
                </div>
            <span className='bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text mx-1 md:mx-3 z-20' >LLC Company</span>
            <div className={"flex md:hidden  text-center text-[#ced0d6] lg:w-[60%] mt-[35px] px-5 lg:px-0 text-[14px] font-Oxanium leading-7 z-50"}>                 
            META-V leads the metaverse revolution, offering a groundbreaking virtual world where users interact with computer-generated environments and each other in real time. Integrating blockchain, VR, and AI, META-V creates a fully immersive digital universe.

Users can explore virtual environments, attend events, conduct business, and socialize in a space that blurs the lines between physical and digital. More than entertainment, META-V redefines how we live, work, and interact. Blockchain ensures secure, transparent transactions, while AI governs the platform, establishing rules, resolving disputes, and fostering a trusted, efficient community.

            </div>
            <div className={"hidden md:flex text-center text-[#ced0d6] lg:w-[60%] mt-[15px] px-5 lg:px-0 text-[14px] font-Oxanium leading-7 z-50 "  }  >
            META-V leads the metaverse revolution, offering a groundbreaking virtual world where users interact with computer-generated environments and each other in real time. Integrating blockchain, VR, and AI, META-V creates a fully immersive digital universe.

Users can explore virtual environments, attend events, conduct business, and socialize in a space that blurs the lines between physical and digital. More than entertainment, META-V redefines how we live, work, and interact. Blockchain ensures secure, transparent transactions, while AI governs the platform, establishing rules, resolving disputes, and fostering a trusted, efficient community.
            </div>
            </div>
                <Image src="/p2.gif" alt="" width={470} height={470} className='w-[570px] h-[570px] absolute top-[30px] left-[29%]  z-0'  />  
          </div>          
        </div>
    </section>
  );
};

export default About