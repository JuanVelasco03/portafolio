import * as React from 'react';
import {useState} from 'react';
// import ReactPlayer from 'react-player'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CarouselImg from '../CarouselImg'
import gdns from '../json/gdns.json'


const ModalGdns = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
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
          <CarouselImg object={gdns}/>
        </div>
      </Modal>
    </div>
  );
}

export default ModalGdns;