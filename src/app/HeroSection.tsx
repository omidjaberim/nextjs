import React, { useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import GriLineImage from "@/assets/gridLine.svg";
import AI from "@/assets/webglPreview/META-V-TECH-AI.png";
import Blockchain from "@/assets/webglPreview/META-V-TECH-BLOCK.png";
import VR from "@/assets/webglPreview/META-V-TECH-VR.png";
import Image from "next/image";

const FoundationSection = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  gap: "30px",
  padding: "80px 80px",

  flexDirection: "column",
  "&>*": {
    transition: "all 1s,visibility 1s",
  },
  [`@media (max-width: ${theme.breakpoints?.values.md}px)`]: {
    padding: "32px 32px",
    gap: "30px",
  },

  [`@media (max-width: ${theme.breakpoints?.values.sm}px)`]: {
    padding: "32px",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
}));

const GradientText = styled(Typography)(({})=>({  
  textAlign: "center",
  lineHeight: "44px", 
  background: 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)',
  WebkitBackgroundClip:'text',
  WebkitTextFillColor:'transparent',
  backgroundClip:'text',
  })
)

const Tab = styled(Box)(({ active }: { active: string }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px",
  position: "relative",
  
  borderRadius: "10px",
  maxWidth: "368px",
  cursor: "pointer",

  [`@media (max-width: 340px)`]: {
    display: "flex",
    padding: "1px",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    flex: "1 ",
    alignItems: "center",
  },
}));

const TabInner = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "linear-gradient(180deg, #222326, #131315)",
  borderRadius: "inherit",
  flex: "1 0 0",
  [`@media (max-width: 340px)`]: {
    fontFamily: "Oxanium",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "inherit",
  },
}));

const Title = styled(Typography)(({ active }: { active: string }) => ({
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "32px",
  background:
    active === "true"
      ? "var(--gr4, linear-gradient(93deg, #979BFF 0.48%, #FED6FF 50.74%, #FFAE9C 100%))"
      : "#FFF",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));
const Description = styled(Typography)(({}) => ({
  color: "var(--Neutral-300, #9A9DAB)",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  transition: "all 1s",
}));

const tabsData = [
  {
    title: "Virtual Reality (VR)",
    description:
      "META-V embodies the essence of a second life, a realm where dreams once confined to the realm of aspiration in the real world",
    subtitle: "VR",
    scene: {
      previewImage: VR.src,
      sceneURL: "https://prod.spline.design/BWBWriNLR4TUc2h5/scene.splinecode",
    },
  },
  {
    title: "Blockchain",
    description: `In META-V, blockchain is essential for asset ownership, transactions, and governance. Smart contracts secure and automate blockchain transactions. NFTs represent unique digital assets like virtual land, items, and artworks. Blockchain's transparency and immutability foster trust in META-V's economy. The META-V token (MV) facilitates transactions for virtual goods, services, assets, and digital economic activities.`,
    subtitle: "Blockchain",
    scene: {
      previewImage: Blockchain.src,
      sceneURL: "https://prod.spline.design/Y8mjjMKWxrKFgrG5/scene.splinecode",
    },
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "AI is vital for overseeing and managing the META-V metaverse ecosystem. It enforces governance, regulations, and ensures order, security, and fairness. AI provides personalized user experiences and helps users find desired activities. It consistently improves the ecosystem and ensures META-V is dynamic and user-centric.",
    subtitle: "AI",
    scene: {
      previewImage: AI.src,
      sceneURL: "https://prod.spline.design/rVbdy-JY-nJx6jIq/scene.splinecode",
    },
  },
];
const Tabs = ({
  isSmallScreen,
  activeTab,
  tabsData = [],
  handleActive,
}: {
  isSmallScreen: boolean;
  activeTab: number;
  tabsData: any[];
  handleActive: (i: number) => void;
}) => {
  const onTabClick = (event: any, index: number) => {
    event.stopPropagation();
    handleActive(index);
  };
  return (
    <>
      {tabsData.map(
        (
          tab: { title: string; subtitle: string; description: string },
          index: number
        ) => {
          let active = activeTab == index;
          return (
            <Tab
              key={tab.title}
              active={active.toString()}
              onClick={(event) => onTabClick(event, index)}
            >
              <TabInner
                className={`md:px-[24px] px-[16px] transition-all py-[11px] md:py-[25px] font-Oxanium md:rounded-[22px] hover:border-x-1 hover:border-t-2 hover:border-[#6C6E78] '+ ${
                  active ? "border-x-1 border-t-2 border-[#FDD4FC]" : ""
                }`}
              >
                <Title active={active.toString()} className="font-Oxanium" >
                  {" "}
                  {!isSmallScreen ? tab.title : tab.subtitle}
                </Title>
                {!isSmallScreen && active && (
                  <Description className="leading-7 text-[#ced0d6]" >{tab.description}</Description>
                )}
              </TabInner>
            </Tab>
          );
        }
      )}
    </>
  );
};

const IFrameContainer = styled(Box)(({ theme }) => ({
  zIndex: 1,
  flex: 1,
  position: "relative",
  display: "flex",
  padding: "0px 64px",
  alignItems: "center",
  gap: "237px",
  justifyContent: "center",

  [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
    fontSize: "28px",
    padding: 0,
    marginTop: "32px",
  },
}));

const GradientCircle = styled(Box)(({ theme }) => ({
  zIndex: "-1",
  position: "absolute",
  transform: "translate(-50% , -50%)",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "500px",
  height: "50%",
  borderRadius: "50%",
  opacity: "0.7",
  background: "var(--gr3, linear-gradient(93deg, #5659C4 0.48%, #D8A1BC 100%))",
  filter: "blur(100px)",
}));

const IFrameContainers = ({ activeTab, tabsData = [] }: any) => {
  return (
    <IFrameContainer>
      <GradientCircle />
      <Image
        src={tabsData[activeTab].scene.previewImage}
        alt=""
        width={507}
        height={282}
      />
    </IFrameContainer>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
const Hero = () => {
  const [activeTab, setActive] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const handleActive = (index: number) => {
    if (activeTab === index) {
    }
    setActive(index);
  };
  return (
    <FoundationSection
      position={"relative"}
      margin={"auto"}
      padding={"16px"}
      component={"section"}
      className="bg-black backdrop-brightness-150 bg-[url('/horizontalLineBg.png'),url('/verticalLineBg.png')] bg-top bg-no-repeat bg-contain"
      id="Technology"
    >
      {isSmallScreen ? (
        <GradientText className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"}>
          Technological <br /> Foundations
        </GradientText>
      ) : (
        <GradientText className={"md:text-[32px] text-[41px] mx-3 font-bold font-Oxanium my-[2px]"}>
          Technological Foundations <br /> of META-V
        </GradientText>
      )}
      <Grid
        className="flex "
        height={isSmallScreen ? "max-content" : "550px"}
        width={"100%"}
        flexWrap={"wrap"}
        flexDirection={!isSmallScreen ? "row" : "column"}
      >
        <Grid
          display={"flex"}
          gap={"16px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          padding={!isSmallScreen ? "0px 64px" : "16px 0px"}
          flexDirection={!isSmallScreen ? "column" : "row"}
        >
          <Tabs
            isSmallScreen={isSmallScreen}
            activeTab={activeTab}
            tabsData={tabsData}
            handleActive={handleActive}
          />
        </Grid>
        {isSmallScreen &&
          tabsData.map((tab, index) => {
            let active = activeTab === index;
            if (!active) return;
            return (
              <Typography
                className="font-Oxanium mt-[24px] leading-7 text-[#ced0d6]"
                key={index}
                variant="body1"
                fontSize={"14px"}
                fontWeight={400}
                textAlign={"center"}
              >
                
                {tab.description}
              </Typography>
            );
          })}
        <IFrameContainers
          render3D={!isSmallScreen}
          tabsData={tabsData}
          activeTab={activeTab}
        />
      </Grid>
    </FoundationSection>
  );
};
export default Hero;
