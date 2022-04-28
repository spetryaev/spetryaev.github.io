import { useState, useEffect } from "react";
import { Fade, Modal, Backdrop } from "@mui/material";
import { Box } from "@mui/system";


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
    const [isOpen, setOpen] = useState(props.isLightboxOpen);

    useEffect(() => {
        setOpen(props.isLightboxOpen);
    }, [props.isLightboxOpen]);

    return (<Box>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={props.handleLightboxOpen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={isOpen}>
            <Box sx={style}>
                
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                
            </Box>
            </Fade>
        </Modal>
    </Box>);
}

export default Lightbox;