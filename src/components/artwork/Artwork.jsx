import { Box } from '@mui/material';
import './Artwork.scss';
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from './ArtworkSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Artwork(props) {
    const dispatch = useDispatch();

    var style = {
        //display: 'block',
        span: {
            width: props.display && props.display === "inset" ? "50%" : "100%"
        }
    }

    const isMobileView = useMediaQuery('(max-width:600px)');

    const handleOnlick = () => {
        if (!isMobileView) {
            dispatch(toggleModal({src: props.asset ? props.asset.url : '', lightboxOpen: true}));
        }
    };

    const alignmentAttributes = {
        "left": "flex-start",
        "center": "center",
        "right": "flex-end"
    }
    return (<Box
                sx={{ flexWrap: 'wrap' }} 
                display="flex" 
                flexDirection="column"
                alignItems={ alignmentAttributes[props.alignment] }
                className="artwork-container">
                    <LazyLoadImage 
                        onClick={handleOnlick}
                        className="artwork" 
                        alt={ props.asset ? props.asset.name : ''}
                        src={ props.asset ? props.asset.url : '' }
                        width={ props.display && props.display === "inset" ? "50%" : "100%" }
                        placeholderSrc={ props.asset && props.asset.formats ? props.asset.formats.thumbnail.url : '' }
                        height="auto"
                        effect="blur"
                    />
                    { props.item && props.showTitle ? <h2> { props.item.title }</h2> : '' }
                    { props.item && props.showDescription ? <p>{ props.item.description }</p> : '' }
            </Box>
        );
}

export default Artwork;



function ArtworkLazy(props) {
    console.log(props);
    return (<>
        <LazyLoadImage 
                alt={ props.data ? props.data.name : ''}
                src={ props.data ? props.data.url : '' }
                width={ props.display && props.display === "inset" ? "50%" : "100%"}
                placeholderSrc={ props.data ? props.data.formats.thumbnail.url : '' }
                height="auto"
                max-width="100%"
                effect="blur"
            />
    </>);
}