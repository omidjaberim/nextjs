import { Grid } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import HamMenu from "@/assets/menu.svg";
import React, {
  useContext,
  useState,
} from "react";
import SideMenu from "./components/SideMenu";
import { StyledButton } from "./components/SmallComponents/AppComponents";
import { AppContext } from "context/utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";

interface IProp {
  scrollToId: (x: string) => void;
  selectedItem: string;
}

const Header = (props: IProp) => {
  const { open: connectWallet } = useWeb3Modal();
  const { account } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const { scrollToId, selectedItem } = props;

  return (
    <Grid
      className="w-full flex justify-center items-center font-Oxanium text-[12px] 
              lg:text-[14px] text-[#fafafa] leading-8 font-semibold p-[8px] backdrop-blur-xl backdrop-brightness-150
               bg-black/80 sticky top-0 z-50"
    >
      <Grid className="flex justify-between w-[calc(100vw)] xl:w-[1440px]">
        <Grid className="w-1/2 md:w-3/4 flex justify-start gap-[2px] md:gap-[7px] xl:gap-[40px]">
          <Image
            src={HamMenu}
            alt="meta"
            width={24}
            height={24}
            className="sm:flex xlg:hidden cursor-pointer mx-2 md:mx-0"
            onClick={() => toggleDrawer(!open)}
          />
          <Grid onClick={()=>scrollTo(0,0)}  className="flex items-center " >
          <Image src={Logo} alt="meta" width={42} height={42} className="ml-1 cursor-pointer"  />
          <span
              className={`2sm:flex hidden text-[24px] mx-2 md:mr-[58px] cursor-pointer hover:animate-pulse hover:scale-105 transition-all`}              
            >
              META-V
          </span>
          </Grid>
          <Grid className="text-white sm:hidden xlg:flex items-center gap-[2px] md:gap-[22px] xl:gap-[32px]">
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "meta" ? " scale-105 text-[#B887FF]" : ""
              }`}
              onClick={() => scrollToId("presale")}
            >
              Presale
            </span>
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "about" ? " scale-105 text-[#B887FF]" : ""
              } `}
              onClick={() => scrollToId("about")}
            >
              About META-V
            </span>
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "Technology" ? " scale-105 text-[#B887FF]" : ""
              }  `}
              onClick={() => scrollToId("Technology")}
            >
              Technology
            </span>
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "tokenomics" ? " scale-105 text-[#B887FF]" : ""
              }  `}
              onClick={() => scrollToId("tokenomics")}
            >
              Tokenomics
            </span>
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "roadmap" ? " scale-105 text-[#B887FF]" : ""
              }   `}
              onClick={() => scrollToId("roadmap")}
            >
              Roadmap
            </span>
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "FAQ" ? " scale-105 text-[#B887FF]" : ""
              }    `}
              onClick={() => scrollToId("FAQ")}
            >
              FAQ
            </span>
          </Grid>
          <Grid className="sm:flex xlg:hidden">
            <SideMenu
              selectedItem={selectedItem}
              scrollToId={scrollToId}
              open={open}
              toggleDrawer={toggleDrawer}
            />
          </Grid>
        </Grid>
        <Grid className="w-1/2 md:w-1/4 flex items-center justify-end gap-[8px] xl:gap-[16px] px-2">
          <a
            href="https://meta-v.gitbook.io/meta-v/"
            className="flex cursor-pointer"
            target="_blank"
          >
            Whitepaper
          </a>
          <StyledButton onClick={() => connectWallet()}>
            <span className="font-semibold text-[12px] lg:text-[14px] flex ">
              {account
                ? account.slice(0, 4) + "..." + account.slice(-4)
                : "Connect"  
                }
            </span>
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
