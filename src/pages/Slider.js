import { Carousel } from 'nuka-carousel'
import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel showArrows={true} showDots={true} wrapMode='wrap' className='slide'>

           <div className='slider1'>
            <div className='page1'>
              <span className='text1'>Masha</span>
              <span className='text2'>Маша ну ты немного удивлена?</span><br></br>
              <span className='text3'>Смотри это ты <br></br>
              </span>
            </div>
           <div className='picture1'><img src='../images/asdads.jpg' className='img'/></div>
           </div>
           <div className='slider1'>
            <div className='page1'><span className='text4'>Здесь тоже ты</span>
           </div>
           <div className='picture1'><img src='../images/gz.jpg' className='img'/></div>
           </div>
           <div className='slider1'>
            <div className='page1'><span className='text4'>И здесь тоже</span>
         </div>
           <div className='picture1'><img src='../images/mz.jpg' className='img'/></div>
           </div>
            
        </Carousel>
      </div>
    )
  }
}
