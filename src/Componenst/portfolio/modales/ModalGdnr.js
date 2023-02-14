import * as React from 'react';
import {useState} from 'react';
// import ReactPlayer from 'react-player'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import gdnr from '../json/gdnr.json'
import CarouselImg from '../CarouselImg'


const ModalGdnr = () => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false)
  const handleOpen = () => {
    setOpen(true);
    setPlaying(true)
  }
  const handleClose = () => {
    setOpen(false)
    setPlaying(false)
  };

  return (
    <div>
      <Button onClick={handleOpen}>Ver imagenes del proyecto</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        className='modal'
      >
        <div className='box'>
          <CarouselImg object={gdnr}/>
        </div>
      </Modal>
    </div>
  );
}

export default ModalGdnr;