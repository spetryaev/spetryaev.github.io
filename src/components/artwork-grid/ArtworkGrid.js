import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
import Lightbox from '../lightbox/Lightbox';
import { ImageList, ImageListItem } from "@mui/material";

var artworks = [];

for (var i = 0; i < 28; i++) {
    artworks.push({key: "aw" + i, label: i, src: "https://cdna.artstation.com/p/assets/images/images/027/844/486/large/sergey-petryaev-daria.jpg?1592735347"});
    i++;
    artworks.push({key: "aw" + i, label: i, src: "https://cdna.artstation.com/p/assets/images/images/029/542/300/large/sergey-petryaev-2-15-19.jpg?1597873039"});
    i++;
    artworks.push({key: "aw" + i, label: i, src: "https://cdnb.artstation.com/p/assets/images/images/034/600/045/large/sergey-petryaev-b2yfctramvk.jpg?1612730177"});
}

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

function ArtworkGrid() {

    return (
        <>
            <Box className="artwork-grid" sx={gridStyles}>
            <ImageList variant="masonry" cols={3} gap={3}>
                    {artworks.map((item, index) => (
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