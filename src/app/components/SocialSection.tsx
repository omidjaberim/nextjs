import { Grid, Link } from "@mui/material"
import Image from "next/image"

import telegramLogo from "@/assets/socialMedia/telegram.svg";
import twitterLogo from "@/assets/socialMedia/twitter.svg";

export const SocialButton = ()=>{
    return(
        <Grid width={"24px"} height={"24px"}  className="bg-[#007cb544] rounded-full h-[36px] w-[36px] flex justify-center items-center " >
              <Image alt="" src={telegramLogo} className="hover:scale-110 w-[24px]" />
          </Grid>
    )
}
const SocialSection = ()=>{
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
    return(
        <Grid className="flex  bg-[#007BB5] rounded-full h-[36px] w-[86px] items-center justify-evenly ">
        {socialShare.map((platform, index) => (
          <Grid width={"24px"} height={"24px"} key={index}  >
          <Link href={platform.link} target="_blank">
            <Grid  width={"100%"} height={"100%"}>
              <Image alt="" src={platform.image} className="hover:scale-110" />
            </Grid>
          </Link>
          </Grid>
        ))}
      </Grid>
    )
}
export default SocialSection