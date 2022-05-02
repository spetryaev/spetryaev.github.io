import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const gridStyles = (theme) => ({
    padding: {
        xs: '0',
        sm: '2.5rem 2.5rem 0 0'
    },
    overflowY: 'scroll',
})

const itemStyles = (theme) => ({
    transition: '0.15s ease',
    [theme.breakpoints.up('sm')]: {
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
            transition: '0.15s ease',
            cursor: 'pointer'
        }
    }
})

function ArtworkGrid(props) {
    const isMobileView = useMediaQuery('(max-width:600px)');
    let nCols;
    if (isMobileView) {
        nCols = 1;
    } else {
        nCols = props.artworks.length > 4 ? 3 : props.artworks.length > 2 ? 2 : 1;
    }
     
    return (
        <>
            <Box sx={gridStyles}>
            <ImageList variant="masonry" cols={nCols} gap={8}>
                    {props.artworks.map((item, index) => (
                        <ImageListItem key={index} sx={itemStyles}>
                            <Artwork key={item.key} {...item}></Artwork>
                        </ImageListItem>
                    ))}
            </ImageList>
            </Box>
        </>
      ); 
}

export default ArtworkGrid;