import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
    const showOneColumn = useMediaQuery('(max-width:1200px)');
    let nCols;
    if (showOneColumn) {
        nCols = 1;
    } else {
        nCols = props.artworks.length > 4 ? 3 : props.artworks.length > 2 ? 2 : 1;
    }
     
    return (
        <>
            <Box sx={gridStyles}>
            <ImageList variant="masonry" cols={nCols} gap={8}>
                    {props.artworks.map((item, index) => (
                        // Lazy loading not working https://www.npmjs.com/package/react-lazy-load-image-component
                        <LazyLoadComponent key={index} delayTime={10000}>
                            <ImageListItem key={index} sx={itemStyles}>
                                <Artwork key={item.key} {...item}></Artwork>
                            </ImageListItem>
                        </LazyLoadComponent>
                    ))}
            </ImageList>
            </Box>
        </>
      ); 
}

export default ArtworkGrid;