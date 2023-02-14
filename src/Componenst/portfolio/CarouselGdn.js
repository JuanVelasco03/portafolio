import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

import '../../css/carousel.css'
import slider from './slider.json'

const CarouselGdn = () => {
  return (
      <Carousel className='carousel'>
        {
          slider.map(item => <Item key={item} item={item} /> )
        }
      </Carousel>
  )
}


export default CarouselGdn
