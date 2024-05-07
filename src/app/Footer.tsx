import React from "react";
import { Box, styled } from "@mui/system";
import {
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import telegramLogo from "@/assets/socialMedia/telegram.svg";
import twitterLogo from "@/assets/socialMedia/twitter.svg";
import { sampleMenu } from "./sampleMenu";

const Container = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  display: "flex",
  
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "32px",
  borderTop: "1px solid rgba(255, 255, 255, 0.16)",
  background:
    "var(--dark-glass, url(<path-to-image>) lightgray 0% 0% / 40.625px 40.625px repeat, linear-gradient(270deg, rgba(255, 255, 255, 0.01) -20%, rgba(40, 40, 40, 0.09) 75.76%, rgba(255, 255, 255, 0.01) 123.64%))",
  backdropFilter: "blur(200px)",
  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    gap: "16px",
    padding: "32px",
    width: "100%",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    gap: "16px",
    padding: "16px",
    width: "100%",
  },
}));

const socialShare = [
    {
    link: "https://t.me/META_V_Official",
    image: telegramLogo,
  },
    {
    link: "https://twitter.com/META_V_Official",
    image: twitterLogo,
  },
 
];
const SocialSection = () => {

  return (
      <Grid
        sx={{
          "@media (max-width: 600px)": {
            gap: "16px",
            alignItems: "flex-start",
            flexDirection: "column", // Maintain vertical layout on smaller screens
          },
        }}
        className="font-Oxanium w-full flex flex-col gap-[32px]  "
      >
        <Grid
          height={"1px"}
          alignSelf={"stretch"}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.16)" }}
        />
        <Grid
          display={"flex"}
          width="100%"
          sx={{
            "@media (max-width: 600px)": {
              gap: "8px",
              alignItems: "center",
              flexDirection: "column", // Maintain vertical layout on smaller screens
            },
          }}
        >
          <Typography
            sx={{
              color: "#9A9DAB",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign:"center"
            }}
          >
            META-V LLC, Dubai @ 2024. All rights reserved.

          </Typography>
          <Grid className="flex flex-1 gap-4 justify-end flex-col md:flex-row">
            <span className="text-[#9A9DAB] text-[13px] leading-7" >contact@meta-v.io</span>
            <div className="flex justify-around">
            {socialShare.map((platform, index) => (
              <Grid width={"24px"} height={"24px"} key={index}  >
              <Link href={platform.link} target="_blank">
                <Grid  width={"100%"} height={"100%"}>
                  <Image alt="" src={platform.image} className="hover:scale-110" />
                </Grid>
              </Link>
              </Grid>
            ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
  );
};

const Footer = (props:any) => {
  const {scrollToId} = props;
  return (
      <Container className="flex flex-col justify-center items-center w-full backdrop-blur-xl backdrop-brightness-150
      bg-black/80" margin={"auto"}>
        <div className=" h-full py-[32px] px-[80px] w-[calc(100vw)] xl:w-[1440px]" >
          <Grid
            display={"flex"}
            width={"100%"}
            gap={"32px"}
            sx={{
              flexWrap: "wrap",
              "@media (max-width: 300px)": {
                whiteSpace: "nowrap",
                gap: "8px",
                alignItems: "flex-start",
                flexDirection: "column", 
              },
              "@media (max-width: 600px)": {
                whiteSpace: "nowrap",
                gap: "16px",
                alignItems: "flex-start",
                flexDirection: "column", // Maintain vertical layout on smaller screens
              },
            }}
          >
            <Grid
              flex={1}
              display={"flex"}
              justifyContent={"flex-start"}
              flexDirection={"row"}
              gap={"8px"}
              alignItems={"center"}
              whiteSpace={"nowrap"}
              marginBottom={"32px"}
            >
              <Image
                alt=""
                style={{ width: "24px", height: "22.4px" }}
                src={logoImage}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "32px",
                }}
              >
                META-V
              </Typography>
            </Grid>
            <Grid
              display={"flex"}
              gap={"32px"}
              className="hidden md:flex"
            >
              {sampleMenu.map((menu, index) => (              
                <Typography
                  key={index}
                  sx={{   
                    marginBottom:"26px",               
                    whiteSpace: "nowrap",
                    padding: "12px 8px",
                    color: "#FFF",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    "&:hover":{
                    color:"#979BFF"
                    },
                    "@media (max-width: 900px)": {
                      marginRight: "2px",
                      lineHeight: "24px",
                      padding: "2px 8px",
                    },
                  }}
                  className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all `}
                  onClick={()=>scrollToId(menu.link.slice(1))}
                >
                  {menu.title}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <SocialSection />
        </div>
      </Container>
  );
};

export default Footer;
