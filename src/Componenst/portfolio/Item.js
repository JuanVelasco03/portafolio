import React from 'react';
import { Paper, Button } from '@mui/material'

function Item({item})
{

  const loadImage = imageName => (require(`./ImgGdi/${imageName}`))
  console.log(item)
    return (
        <Paper>
          <img src={loadImage(item.image)} alt="img" style={{width:"100%", height: "60vh"}}/>
            <h3>{item.title}</h3>
        </Paper>
    )
}

export default Item;

