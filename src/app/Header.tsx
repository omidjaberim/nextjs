/* eslint-disable react/jsx-no-duplicate-props */
import { Grid } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import HamMenu from "@/assets/menu.svg";
import React, {
  forwardRef,
  useContext,
  useLayoutEffect,
  useRef,
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
      className="bg-[url('/footerNoise.png')] bg-auto  w-[calc(100vw-5px)] xl:w-[1440px] flex justify-center items-center  font-Oxanium text-[12px] 
              lg:text-[14px] text-[#fafafa] leading-8	font-semibold py-[12px] bg-[#131315f1] shadow-black/5 fixed top-0 z-50"
    >
      <Grid className="flex justify-between sm:w-11/12 md:w-11/12">
        <Grid className="w-1/2 md:w-3/4 flex justify-start gap-[2px] md:gap-[7px] xl:gap-[40px]">
          <Image
            src={HamMenu}
            alt="meta"
            width={24}
            height={24}
            className="sm:flex lg:hidden cursor-pointer mx-2 md:mx-0"
            onClick={() => toggleDrawer(!open)}
          />
          <Image src={Logo} alt="meta" width={32} height={30} />
          <Grid className="text-white sm:hidden lg:flex items-center gap-[2px] md:gap-[22px] xl:gap-[32px]">
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all ${
                selectedItem === "meta" ? " scale-105 text-[#B887FF]" : ""
              }`}
              onClick={() => scrollToId("meta")}
            >
              META-V
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
            <span
              className={`cursor-pointer hover:animate-pulse hover:scale-105 transition-all`}
            >
              Audit
            </span>
          </Grid>
          <Grid className="sm:flex lg:hidden">
            <SideMenu
              selectedItem={selectedItem}
              scrollToId={scrollToId}
              open={open}
              toggleDrawer={toggleDrawer}
            />
          </Grid>
        </Grid>
        <Grid className="w-1/2 md:w-1/4 flex items-center justify-end gap-[4px] xl:gap-[16px]">
          <a
            href="https://meta-v.gitbook.io/meta-v/"
            className="hidden xl:flex cursor-pointer"
            target="_blank"
          >
            Whitepaper
          </a>
          <StyledButton onClick={() => connectWallet()}>
            <span className="font-semibold text-[12px] lg:text-[14px] flex ">
              {/* Connect <span> Wallet</span> */}
              {account
                ? account.slice(0, 4) + "..." + account.slice(-4)
                : "Connect Wallet"}
            </span>
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
