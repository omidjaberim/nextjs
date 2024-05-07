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
    <section id='about' className={"w-full flex flex-col items-center bg-[#11121A] font-Oxanium pt-[62px]  "}  > 
        <div className=' max-w-[1440px] relative' >   
            <div className=' flex lg:flex-row lg:justify-between items-center  mx-auto flex-col  '>  
            <div className='flex flex-col items-center w-full h-[600px]' >
                    <Image src="/Ellipse02.svg" alt="" width={450} height={240} 
                      style={{animation:'pulse 9s infinite'}} 
                      className="blur-xl absolute top-[10%] left-[20%] z-10 w-[250px] h-[120] lg:w-[450px] lg:h-[240px] " />                    
                    <Image src="/Ellipse03.svg" alt="" width={350} height={180} 
                      style={{animation:'pulse 7s infinite'}} 
                        className="w-[250px] h-[120] lg:w-[350px] lg:h-[180px]  blur-xl absolute top-[20%] left-[5%] lg:left-[40%] z-10" />                    
                    <Image src="/Ellipse01.svg" alt="" width={370} height={190} 
                    style={{animation:'pulse 5s infinite'}} 
                    className="blur-xl absolute top-[45%] left-[5%] lg:left-[55%] z-10 w-[250px] h-[120] lg:w-[370px] lg:h-[190px]" />
                <div className={"w-full flex justify-center items-center mt-[10px] z-20"} >
                    <Title className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"}>About META-V</Title>            
                </div>
            <span className='bg-gradient-to-r from-[#FED3CA]  to-[#FFA998] inline-block text-transparent bg-clip-text mx-1 md:mx-3 z-20' >LLC Company</span>
            <div className={"flex md:hidden  text-center text-[#ced0d6] lg:w-[60%] mt-[35px] px-5 lg:px-0 text-[16px] font-Oxanium leading-7 z-40"}>                 
            META-V leads the metaverse revolution, offering a groundbreaking virtual world where users interact with computer-generated environments and each other in real time. Integrating blockchain, VR, and AI, META-V creates a fully immersive digital universe.

Users can explore virtual environments, attend events, conduct business, and socialize in a space that blurs the lines between physical and digital. More than entertainment, META-V redefines how we live, work, and interact. Blockchain ensures secure, transparent transactions, while AI governs the platform, establishing rules, resolving disputes, and fostering a trusted, efficient community.

            </div>
            <div className={"hidden md:flex text-center text-[#ced0d6] lg:w-[60%] mt-[15px] px-5 lg:px-0 text-[16px] font-Oxanium leading-7 z-50 "  }  >
            META-V leads the metaverse revolution, offering a groundbreaking virtual world where users interact with computer-generated environments and each other in real time. Integrating blockchain, VR, and AI, META-V creates a fully immersive digital universe.

Users can explore virtual environments, attend events, conduct business, and socialize in a space that blurs the lines between physical and digital. More than entertainment, META-V redefines how we live, work, and interact. Blockchain ensures secure, transparent transactions, while AI governs the platform, establishing rules, resolving disputes, and fostering a trusted, efficient community.
            </div>
            </div>
                
          </div>          
        </div>
    </section>
  );
};

export default About