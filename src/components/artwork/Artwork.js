import { Box } from '@mui/material';
import './Artwork.scss';
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from './ArtworkSlice';

function Artwork(props) {
    const dispatch = useDispatch();

    const style = {
        display: 'block',
        img: {
            maxWidth: '100%'
        }
    }
    
    return (<Box 
                onClick={() => dispatch(toggleModal({src: props.src, lightboxOpen: true}))} 
                sx={style}
                className="artwork">
                    <img src={props.src}></img>
            </Box>);
}

export default Artwork;