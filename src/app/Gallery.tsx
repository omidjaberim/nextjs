import React from "react";
import {  Stack } from "@mui/system";
import { Grid } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselStyle.css"
import { ArrowNext, ArrowPrev } from "./button/customArrow";
import next from "next";
import Image from "next/image"

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
  
  const ButtonGroup = ({ next, previous, goToSlide, ...rest } : 
    {next:any;previous:any;goToSlide:any,[x:string]:any} ) => {
    const { carouselState: { currentSlide ,totalItems,slidesToShow} } = rest;
    return (
      <Grid className="flex gap-[24px] items-center justify-center mt-[0px]" >
        <Grid  className="hover:scale-110 bg-black" component={"button"}   
            sx={{ all: "unset" ,cursor:"pointer", "&:focus":{ outline:"none"}  , 
            width:"48px",height:"48px" ,borderRadius:"140px" ,
            display:"flex" , justifyContent:"center",alignItems:"center" }} 
            disabled ={currentSlide === 0 ? true : false} 
            onClick={() => previous()}
        >
            <ArrowPrev isActive={currentSlide === 0 ? !true : !false} />
        </Grid>
        <Grid  className="hover:scale-110 bg-black" component={"button"} 
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

    const counterArr = [] as number[];
    for(let x = 1 ; x <= 24 ; x++){
      counterArr.push(x)
    } 

    return (
          <Carousel  arrows={false} sliderClass="commentItems" 
            itemClass="carasolItem"  infinite autoPlay={!false} autoPlaySpeed={5000} 
            transitionDuration={500}  partialVisible={true} 
            centerMode={!true} responsive={responsive} renderButtonGroupOutside={true}             
            customButtonGroup={<ButtonGroup next={()=>next} previous={()=>next} goToSlide={()=>{}}   />} >
                {
                  counterArr.map( (x:number) => ( <img className="w-[300px] h-[300px] rounded-xl " src={`/${x}.png`} alt="metav" /> ) )  
                }
          </Carousel>
      )
  }

  const Gallery = () => {
    return (
      <Grid className="bg-[#11121A] p-[26px]" >
        <Stack className="lg:max-w-[1440px] mx-auto mt-0  px-[16px] md:px-0" component={"section"}  width={"100%"} justifyContent={"center"} gap={4}  >
          <CarouselWrapper />
        </Stack>
      </Grid>
    )
  };
  export default Gallery;
