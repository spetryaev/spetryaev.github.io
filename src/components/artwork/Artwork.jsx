import { Box } from '@mui/material';
import './Artwork.scss';
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from './ArtworkSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const alignmentOptions = {
    "left": "flex-start",
    "center": "center",
    "right": "flex-end"
}

function Artwork(props) {
    const dispatch = useDispatch();
    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleOnlick = () => {
        if (!isMobileView) {
            dispatch(toggleModal({src: props.asset ? props.asset.url : '', lightboxOpen: true}));
        }
    };
    
    return (<Box
                sx={{ flexWrap: 'wrap' }} 
                display="flex" 
                flexDirection="column"
                alignItems={ alignmentOptions[props.alignment] }
                className="artwork-container">
                    <LazyLoadImage 
                        onClick={ props.lightbox ? handleOnlick : null}
                        className="artwork" 
                        alt={ props.asset ? props.asset.name : ''}
                        src={ props.asset ? props.asset.url : '' } // TODO: pass smaller format for data saving
                        width={ props.display && props.display === "inset" ? "50%" : "100%" }
                        placeholderSrc={ props.asset && props.asset.formats ? props.asset.formats.thumbnail.url : '' }
                        height="auto"
                        effect="blur"
                    />
                    { props.item && props.showTitle ? <h2> { props.item.title }</h2> : null }
                    { props.item && props.showDescription ? <p>{ props.item.description }</p> : null }
            </Box>
        );
}

export default Artwork;
