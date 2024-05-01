"use client"

import { ClickAwayListener, Grid } from "@mui/material";
import Header from "./Header";
import MarketListingTime from "./MarketListingTime";
import Testimonies from "./Testimonies";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import {   useLayoutEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import SocaialSnackBar from "./components/SocaialSnackBar";
import  SocialSection,{SocialButton}  from "./components/SocialSection";
const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));
      setActiveId(position?.id || "");
    };

    listener();
    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export default function App() {
  const scrollToId = (id:string)=>{
      document.getElementById(id)?.scrollIntoView({
        behavior : 'smooth',
        block :  "center",
        inline : "center"
      });      
  }
  const ids = ["meta", "about", "Technology","tokenomics","roadmap","FAQ"];
  const activeId = useScrollspy(ids, 39); 

  const [socialSnack,setSocialSnack] = useState<boolean>(false);
  const handleSocialBtnClick = ()=>{
    setSocialSnack(!socialSnack)
  }  
  const closeSocial = ()=>{
    setSocialSnack(false)
  }  

  return (          
    <Grid  className="w-full flex flex-col justify-center items-center bg-black relative">
      <Header  scrollToId={scrollToId} selectedItem={activeId} />
        <ClickAwayListener onClickAway={closeSocial}>
        <Chip 
          className="fixed rounded-full  hover:scale-105 transition-all z-50 top-[100px]  text-[16px] leading-8 right-1  text-white" 
          onClick={handleSocialBtnClick} label={socialSnack ? <SocialSection /> : <SocialButton />} />  
        </ClickAwayListener>
      <div className="lg:max-w-[1440px] w-full flex-col items-center justify-center relative ">         
        <div id="meta" >
          <MarketListingTime />          
          <Testimonies />
        </div>
        <AboutSection  />
        <HeroSection />
        <Tokenomics/>
        <Roadmap/>
        <FaqSection />        
      </div>  
      <Footer scrollToId={scrollToId} selectedItem={activeId} />
    </Grid>
  );
}
