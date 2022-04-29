import { Box } from '@mui/material';
import './Artwork.scss';
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from './ArtworkSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

function Artwork(props) {
    const dispatch = useDispatch();

    var style = {
        display: 'block',
        img: {
            maxWidth: '100%',
        }
    }

    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleOnlick = () => {
        if (!isMobileView) {
            dispatch(toggleModal({src: props.src, lightboxOpen: true}));
        }
    };

    return (<Box 
                onClick={handleOnlick} 
                sx={style}
                className="artwork">
                    <img src={props.src} alt="art" loading='lazy'></img>
            </Box>);
}

export default Artwork;