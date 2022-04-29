import { Box } from '@mui/material';
import './Artwork.scss';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal, selectSrc } from './ArtworkSlice';

function Artwork(props) {
    const src = useSelector((state) => state.artwork.src);
    const dispatch = useDispatch();

    const style = {
        display: 'block',
    }
    
    return (<Box 
                onClick={() => dispatch(toggleModal({src: props.content, lightboxOpen: true}))} 
                sx={style}
                className="artwork">
                    {props.content}
            </Box>);
}

export default Artwork;