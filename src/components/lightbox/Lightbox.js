import { Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { toggleModal } from '../artwork/ArtworkSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Lightbox.scss';

function Lightbox(props) {
    const isOpen = useSelector((state) => state.artwork.lightboxOpen);
    const src = useSelector((state) => state.artwork.src);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleModal({src: src, lightboxOpen: false}))
    }

    return (<Box>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={() => dispatch(toggleModal({src: src, lightboxOpen: false}))} 
            closeAfterTransition
            hideBackdrop
        >
            <Fade in={isOpen} timeout={300}>
            <Box className="lightbox">
                <Box className="lightbox_container" onClick={handleClose}>
                    <img src={src} alt="art"></img>
                </Box>
                <div className="lightbox_background"></div>
            </Box>
            </Fade>
        </Modal>
    </Box>);
}

export default Lightbox;