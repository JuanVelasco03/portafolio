import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

import '../../css/carousel.css'

const CarouselImg = (props) => {
  return (
      <Carousel className='carousel'>
        {
          props.object.map(item => <Item key={item} item={item} folder={item} /> )
        }
      </Carousel>
  )
}


export default CarouselImg;
