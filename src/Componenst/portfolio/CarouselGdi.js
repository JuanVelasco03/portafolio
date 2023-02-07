import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import {login,
  Img1,
  Img2,
  Img3,
  Img4} from './ImgGdi/ImagesGdi.js'

import '../../css/carousel.css'
import slider from './slider.json'

const CarouselGdi = () => {
  return (
    <div className='carousel_content'>
      <Carousel className='carousel'>
        {
          slider.map(item => <Item key={item} item={item} /> )
        }
      </Carousel>

    </div>
  )
}


export default CarouselGdi
