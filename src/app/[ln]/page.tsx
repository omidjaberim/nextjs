"use client"
import { Grid } from "@mui/material";
import Header from "../Header";
import MarketListingTime from "../MarketListingTime";
import Testimonies from "../Testimonies";
import AboutSection from "../AboutSection";
import HeroSection from "../HeroSection";
import Tokenomics from "../Tokenomics";
import Roadmap from "../Roadmap";
import FaqSection from "../FaqSection";
import Footer from "../Footer";
import {  useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from '../i18n/client'

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
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


export default  function App() {
  const pathnameUrl = usePathname();  
  const currentLang = pathnameUrl.slice(1)
  const {t} = useTranslation(currentLang)
  const scrollToId = (id:string)=>{
      document.getElementById(id)?.scrollIntoView({
        behavior : 'smooth',
        block :  "start",
        inline : "start"
      });
  }
  const ids = ["meta", "about", "Technology","tokenomics","roadmap","FAQ"];
  const activeId = useScrollspy(ids, 49);


  return (          
    <Grid  className="w-full flex flex-col justify-center items-center bg-[#11121A] relative">
      <Header scrollToId={scrollToId} selectedItem={activeId} t={t} currentLang={currentLang} />
      <div className="w-full flex-col items-center justify-center relative ">         
        <div id="meta" className="w-full flex-col items-center justify-center" >
          <MarketListingTime t={t}/>          
          <Testimonies t={t} />
        </div>
        <AboutSection t={t} />
        <HeroSection t={t} />
        <Tokenomics t={t}/>
        <Roadmap t={t}/>
        <FaqSection t={t} />        
      </div>  
      <Footer t={t} scrollToId={scrollToId} selectedItem={activeId} />
    </Grid>
  );
}
