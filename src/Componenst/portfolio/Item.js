import React from 'react';
import { Paper} from '@mui/material'
import slider from './json/slider.json'

function Item({item})
{
  const loadImage = (imageName) => (require(`./images/${item.folder}/${imageName}`))
  return (
        <Paper>
          <div>
           <img src={loadImage(item.image)} alt="img" className="carousel_image" />
          </div>
          <h3 className='carousel_title'>{item.title}</h3>
        </Paper>
    )
}

export default Item;

