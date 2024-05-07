import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/system";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
  Grid
} from "@mui/material";

import minus from "@/assets/minus-icon.svg";
import plus from "@/assets/plus-icon.svg";
import Image from "next/image";
import gridLine from "@/assets/gridLine.svg";
import faq from "@/assets/webglPreview/BlackGlassCube.png" 

const ExpandPlusMinus = ({ isExpanded }:{isExpanded:boolean}) => {
  return (
    <Grid className="w-[24px] h-[24px] flex justify-center items-center ">
      {isExpanded ? <Image alt="" src={minus} /> : <Image alt="" src={plus} />}
    </Grid>
  );
};

const FAQ = ({ question, answer, expanded, handleChange, index }:{question:string;answer:string;expanded:number;handleChange:(index:number)=>void;index:number}) => {
  const theme =  useTheme();
  const isMediumScreen  = useMediaQuery(theme.breakpoints.down('md'));
  return (
      <Accordion
        expanded={index == expanded}
        onChange={() => {
          handleChange(index);
        }}
        sx={{
          maxWidth: isMediumScreen ? "100%" :"491px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          background: "#131315cb",
          backdropFilter: "blur(16px)",
        }}
        className="rounded-xl z-10"
      >
        <AccordionSummary
          sx={{ width: "100%" }}
          expandIcon={<ExpandPlusMinus isExpanded={index === expanded} />}
          className="rounded-t-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-around",
              color: "#FFF",
              textAlign: "start",
              fontSize:  isMediumScreen ? "16px" :"20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "32px",
            }}
            className="font-Oxanium"
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails 
          className="bg-gradient-to-r from-[#1b1d2c] from-30% via-[#282c42] via-50% to-[#2a2d3f] rounded-b-lg"
          sx={{ borderRadius: 0 }}>
          <Typography
            sx={{
              color: "#9A9DAB",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
            className="font-Oxanium "
          >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
};

const FaqWrapper = styled(Box)(( ) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "0 0", 
  justifyContent: "flex-center",
  flex: 1,
  alignItems: "flex-center",
 
}));


const GradientText = styled(Typography)(({  }) => ({
  textAlign: "center",
  lineHeight: "44px", 
  background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
  WebkitBackgroundClip:'text',
  WebkitTextFillColor:'transparent',
  backgroundClip:'text',
  [`@media (max-width: 640px)`]: {
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
  },

  [`@media (max-width: 344px)`]: {
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
  },
}));


const sampleFaqs = [
  {
    question: "What is META-V?",
    answer:
      "The META-V economy relies on its cryptocurrency and a marketplace for NFTs. In this metaverse, individuals can buy, sell, or trade NFTs representing digital assets and properties, ensuring ownership and potential value growth. META-V's (MV) token facilitates secure transactions, creating a smooth and safe economic system in the metaverse.",
  },
  {
    question: "How does the META-V economy work?",
    answer:
      "META-V accessible to anyone interested in virtual worlds, digital economies, or online communities. Users can create an avatar to explore the metaverse, engage in activities, and build their presence in the digital universe.",
  },
  {
    question: "Can anyone join META-V?",
    answer:
      "In META-V, users explore a diverse digital world without limitations. They engage in various virtual activities, from social gatherings to work, education, and entertainment. The platform mirrors real-life tasks, offering a seamless virtual experience without boundaries.",
  },
  {
    question: "What can I do in META-V?",
    answer:
      "To access additional details regarding META-V, such as technical specifications, progress reports, and upcoming community gatherings, please visit our official website. We also encourage you to peruse the whitepaper and engage with our META-V social media platforms to stay informed on the latest developments and announcements.",
  },
];
const FaqSection = () => {
  const [expanded, setExpand] = useState(0);

  const handleChange = (index:number) => {
    setExpand(expanded === index ? -1 : index);
  };

  return (
      <section id="FAQ"  className="lg:max-w-[1440px] mx-auto flex justify-center flex-col lg:flex-row lg:justify-between  bg-[#11121A] w-full font-Oxanium p-[28px]" >        
        <div className="flex flex-col justify-center w-full lg:w-1/2" >
        <GradientText className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium mt-[2px] mb-[25px]"}>
          FAQ
        </GradientText>        
          <FaqWrapper zIndex={1} className="mb-[144px] font-Oxanium mx-auto mt-[28px]">
            {sampleFaqs.map((faq, index) => (
              <FAQ
                key={faq.question}
                expanded={expanded}
                index={index}
                handleChange={handleChange}
                
                {...faq}                                
              ></FAQ>
            ))}             
          </FaqWrapper>
          </div>
          <div className="flex mb-[150px] lg:mb-0 flex-col w-full lg:w-1/2 items-center lg:flex-row justify-start lg:justify-center" >
            <Image src="/FAQ.png" alt="" width={340} height={340} className="w-[200px] h-[318px]  " />
          </div>
      </section>
  );
};

export default FaqSection;
