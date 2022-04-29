import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
import Lightbox from '../lightbox/Lightbox';
import { ImageList, ImageListItem } from "@mui/material";

const gridStyles = (theme) => ({
    padding: {
        xs: '0',
        sm: '40px 40px 0 0'
    },
    overflowY: 'scroll',
    [theme.breakpoints.down('lg')]: {
        '& .MuiImageList-root': {
            columnCount: '1 !important'
        }
    }
})

const itemStyles = {
    cursor: 'pointer',
    transition: '0.15s ease',
    '&:hover': {
        opacity: [0.9, 0.8, 0.7],
        transition: '0.15s ease'
    }
}

function ArtworkGrid(props) {

    return (
        <>
            <Box className="artwork-grid" sx={gridStyles}>
            <ImageList variant="masonry" cols={3} gap={3}>
                    {props.artworks.map((item, index) => (
                        <ImageListItem key={index} sx={itemStyles}>
                            <Artwork key={item.key} content={item.label} src={item.src}></Artwork>
                        </ImageListItem>
                    ))}
            </ImageList>
            </Box>
            <Lightbox/>
        </>
      ); 
}

export default ArtworkGrid;