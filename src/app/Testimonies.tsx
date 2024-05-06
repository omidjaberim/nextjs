import React, { useState } from "react";
import {  Stack } from "@mui/system";
import {
  Grid,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselStyle.css"
import { ArrowNext, ArrowPrev } from "./button/customArrow";
import { AndrewBosworth, AuthorMuratDurmus, EricSchmidt, JensenHuang, MarkZuckerberg, MatthewBall, RichardStallman, SatyaNadella } from "./Images";
import next from "next";

  const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2000 },
          items: 5,
          partialVisibilityGutter: 40 ,// this is needed to tell the amount of px that should be visible.
          slidesToSlide:1,
        },
      tablet: {
          breakpoint: { max: 2000 ,min: 1750, },
          items: 4,
          partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
          slidesToSlide:1,
        
      },
      tablet1: {
          breakpoint: { max: 1750 ,min: 1250, },
          items: 3,
          partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
          slidesToSlide:1,

      },
      tablet2: {
          breakpoint: { max: 1250 ,min: 750, },
          items: 2,
          partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
          slidesToSlide:1,
        
      },
      mobile: {
        breakpoint: { max: 750, min: 0 },
        items: 1,
        partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
        slidesToSlide:1,
      }
  }
  
  const commentsData = [{
    profile :{
        avatar :SatyaNadella.src,
        username:"Satya Nadella",
        description:"Microsoft CEO", 
    },
    comment :`“The metaverse is here, and it’s not only transforming how we see the world but how we participate in it – from the factory floor to the meeting room.”`
  },
  {
    profile :{
        avatar :AndrewBosworth.src,
        username:"Andrew Bosworth",
        description:"Facebook Reality Labs", 
    },
    comment :`“The watchword of the metaverse is continuity. The feeling that when you go from one place to another place, there are some things that… identity come with you. So avatars are important… your digital goods come with you…Can your friends come with you? Can you travel together? Can you stay in communication while you move from place to place?”`
  },
  {
    profile :{
        avatar :MatthewBall.src,
        username:"Matthew Ball",
        description:"Entrepreneur", 
    },
    comment :`“The metaverse is best understood as the shift of computing and interaction from a device in your pocket into a virtual simulation.”`
  },
  {
    profile :{
        avatar :RichardStallman.src,
        username:"Richard Stallman",
        description:"Programmer", 
    },
    comment :`“A metaverse is a possible future in which online communities, organizations, and economies have evolved beyond their current forms.”`
  },
  {
    profile :{
        avatar :SatyaNadella.src,
        username:"Satya Nadella",
        description:"Microsoft CEO", 
    },
    comment :`“It is a wide-scale and interoperable nеtwork of rеal-timе,  rеndеrеd,  3D virtual worlds that can bе еxpеriеncеd synchronously and continuously by an effectively unlimitеd numbеr of usеrs,  each with an individual sеnsе of prеsеncе.”`
  },

  {
    profile :{
        avatar :JensenHuang.src,
        username:"Jensen Huang",
        description:"NVIDIA CEO", 
    },
    comment :`“Just like in the infancy of the internet, no one can predict exactly how and how large the metaverse will grow — but today, we know we can lay the foundations.`
  },
  {
    profile :{
        avatar :MarkZuckerberg.src,
        username:"Mark Zuckerberg",
        description:"META CEO", 
    },
    comment :`“It is a wide-scale and interoperable nеtwork of rеal-timе,  rеndеrеd,  3D virtual worlds that can bе еxpеriеncеd synchronously and continuously by an effectively unlimitеd numbеr of usеrs,  each with an individual sеnsе of prеsеncе.”`
  },
  {
    profile :{
        avatar :EricSchmidt.src,
        username:"Eric Schmidt",
        description:"Google CEO", 
    },
    comment :`“Meta’s metaverse would be a massive factor in replacing human relationships. Not only would it threaten or endanger human interaction, but it could contribute to people choosing more of the AR world rather than the real world outside the lenses.”`
  },
  {
    profile :{
        avatar :AuthorMuratDurmus.src,
        username:"AuthorMurat Durmus",
        description:"AISOMA CEO", 
    },
    comment :`“The Metaverse is the ideal playground in which the AI can let off steam. The more humans lose themselves in it, the more the AI will take control. That much is certain.”`
  },

  ]

const Comments =({profile ,comment }:{profile:any;comment:string})=>{
    const [hover,setHover] = useState(false);
    return (
        <Grid component={"div"} onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}  sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            gap:"16px",
            width:{xl : "416px" ,md:"416px" , xs : "368px" } , 
            padding:"24px" , 
            margin:"10px",
            backdropFilter: "blur(16px)",
            borderRadius:"12px",
            cursor:"pointer",

        }}
          className=" text-[14px] leading-6 text-white bg-[#11121A]"
        >
          <Typography variant='body1' className="font-Oxanium"  fontSize={'14px'} fontWeight={400} lineHeight={'24px'} color={"#FFF"}>  {comment} </Typography> 
          <Grid className="flex gap-[16px]  justify-center items-center" >
              <Grid className="flex w-[48px] h-[48px] rounded-[48px] border border-1 border-solid border-[#979BFF]" >
                  <Grid component={"img"} borderRadius={"inherit"} src={profile.avatar}   width={"100%"}  height={"100%"} />
              </Grid>    
              <Grid display={"flex"}  flex={1} flexDirection={"column"}>
                  <Typography variant='body1' className="font-Oxanium"   fontSize={'14px'} fontWeight={600} lineHeight={'24px'} color={"linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)"} 
                  sx={{
                    background: hover ? 'linear-gradient(93deg, #CDCFFF 16.47%, #FED6FF 49.36%, #FFE5DF 81.61%)' : "#FFF",
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:'transparent',
                    backgroundClip:'text',
                  }} >  {profile.username} </Typography> 
                  <Typography className="font-Oxanium" variant='body1'  fontSize={'12px'} fontWeight={400} lineHeight={'20px'} color={"#9A9DAB"}>  {profile.description} </Typography> 
              </Grid>
          </Grid>    
        </Grid>
    )
}


  const ButtonGroup = ({ next, previous, goToSlide, ...rest } : 
    {next:any;previous:any;goToSlide:any,[x:string]:any} ) => {
    const { carouselState: { currentSlide ,totalItems,slidesToShow} } = rest;
    return (
      <Grid className="flex gap-[24px] items-center justify-center mt-[0px]" >
        <Grid  className="hover:scale-110 bg-[#11121A]" component={"button"}   
            sx={{ all: "unset" ,cursor:"pointer", "&:focus":{ outline:"none"}  , 
            width:"48px",height:"48px" ,borderRadius:"140px" ,
            display:"flex" , justifyContent:"center",alignItems:"center" }} 
            disabled ={currentSlide === 0 ? true : false} 
            onClick={() => previous()}
        >
            <ArrowPrev isActive={currentSlide === 0 ? !true : !false} />
        </Grid>
        <Grid  className="hover:scale-110 bg-[#11121A]" component={"button"} 
          sx={{all: "unset" , cursor:"pointer", "&:focus":{ outline:"none"} ,width:"48px",
          height:"48px" ,borderRadius:"140px" , display:"flex" , 
          justifyContent:"center",alignItems:"center" }} 
          disabled ={(currentSlide+slidesToShow) === totalItems ? true : false} 
          onClick={() => next()}
          >
            <ArrowNext isActive={totalItems === (currentSlide+slidesToShow)  ? !true : !false } />
        </Grid>       
      </Grid>
    );
  };

  const CarouselWrapper = ()=>{
    return (
          <Carousel  arrows={false} sliderClass="commentItems" 
            itemClass="carasolItem"  infinite autoPlay={!false} autoPlaySpeed={5000} 
            transitionDuration={500}  partialVisible={true} 
            centerMode={!true} responsive={responsive} renderButtonGroupOutside={true}             
            customButtonGroup={<ButtonGroup next={()=>next} previous={()=>next} goToSlide={()=>{}}   />} >
            {commentsData.map((commentData,index)=>(<Comments  key={index} profile={commentData.profile} comment={commentData.comment}/>))}
          </Carousel>
      )
  }

  const Testimonies = () => {
    return (
      <Grid className="bg-black p-[26px]" >
        <Stack className="lg:max-w-[1440px] mx-auto   sm:mt-[360px] md:mt-[160px] lg:mt-0  px-[16px] md:px-0" component={"section"}  width={"100%"} justifyContent={"center"} gap={4}  >
          <CarouselWrapper/>
        </Stack>
      </Grid>
    )
  };

export default Testimonies;
