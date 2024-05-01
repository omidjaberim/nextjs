import { Grid, Link } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
export const SocialButton = ()=>{
    return(
        <Grid width={"24px"} height={"24px"}  className="bg-[#007cb5e5] rounded-full h-[36px] w-[36px] flex justify-center items-center " >
              <TwitterIcon className="hover:scale-110 w-[24px]" />
          </Grid>
    )
}
const SocialSection = ()=>{
    const socialShare = [
        {
        link: "https://twitter.com/META_V_Official",
        image: <TwitterIcon className="hover:scale-110 text-white" />,
      },
        {
        link: "https://t.me/META_V_Official",
        image: <TelegramIcon className="hover:scale-110 text-white " />,
      },
     
    ];
    return(
        <Grid className="flex  bg-[#007BB5] rounded-full h-[36px] w-[86px] items-center justify-evenly ">
        {socialShare.map((platform, index) => (
          <Grid  key={index}  >
          <Link href={platform.link} target="_blank" width={"24px"} height={"24px"} >
              {platform.image} 
          </Link>
          </Grid>
        ))}
      </Grid>
    )
}
export default SocialSection