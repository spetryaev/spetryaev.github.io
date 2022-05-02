import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
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
    return (
        <>
            <Box sx={gridStyles}>
            <ImageList variant="masonry" cols={3} gap={8}>
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