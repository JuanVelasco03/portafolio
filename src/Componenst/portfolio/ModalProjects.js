import * as React from 'react';
import {useState} from 'react';
// import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CarouselGdi from './CarouselGdi'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "70%",
  bgcolor: '#eef1f6',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: '10px'
};


const ModalProjects = () => {
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
      >
        <Box sx={style}>
          {/* <ReactPlayer 
            url='https://music.youtube.com/watch?v=E6hq7sCwmU0&list=RDAMVML46JhW3LDb4'
            width='100%'
            height='100%'
            controls
            playing={playing}
          /> */}
          <CarouselGdi/>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalProjects;