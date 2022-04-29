import { useState, useEffect } from "react";
import { Fade, Modal, Backdrop } from "@mui/material";
import { Box } from "@mui/system";
import { toggleModal } from '../artwork/ArtworkSlice';
import { useSelector, useDispatch } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: 'white'
  };

function Lightbox(props) {
    const isOpen = useSelector((state) => state.artwork.lightboxOpen);
    const src = useSelector((state) => state.artwork.src);
    const dispatch = useDispatch();

    return (<Box>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={() => dispatch(toggleModal({src: src, lightboxOpen: false}))} 
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={isOpen}>
            <Box sx={style}>
                
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Artwork {src}
                
            </Box>
            </Fade>
        </Modal>
    </Box>);
}

export default Lightbox;