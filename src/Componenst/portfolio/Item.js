import React from 'react';
import { Paper} from '@mui/material'

function Item({item})
{

  const loadImage = imageName => (require(`./ImgGdi/${imageName}`))
  console.log(item)
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

