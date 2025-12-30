import { Carousel } from 'nuka-carousel'
import React, { Component } from 'react'
import Slider from 'react-slick'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay:true,
  autoplaySpeed:2000
};
export default class AboutSlider extends Component {

  
  render() {
    return (
      <div>
     
      
      <div className='slide_box'>
      <span className='text7'>Our Brands</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem<br></br> ipsum dolor sit amet.</span>   
       <Slider {...settings} className='slide1'>
       
         
           <img src='../images/levus.png' className='slide2'/>
           <img src='../images/adidas.png' className='slide2'/>
          
          <img src='../images/nike.png' className='slide2'/>
          <img src='../images/hm.png' className='slide2'/>
        </Slider>
      </div>
      </div>
    )
  }
}
