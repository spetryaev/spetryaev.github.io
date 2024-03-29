import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Box from '@mui/material/Box';
import { ImageList } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const gridStyles = (theme) => ({
    padding: {
        xs: '0',
        sm: '2.5rem 2.5rem 0 0'
    },
    overflowY: 'scroll',
})

// const itemStyles = (theme) => ({
//     transition: '0.15s ease',
//     [theme.breakpoints.up('sm')]: {
//         '&:hover': {
//             opacity: [0.9, 0.8, 0.7],
//             transition: '0.15s ease',
//             cursor: 'pointer'
//         }
//     }
// })

function ArtworkGrid(props) {
    const showOneColumn = useMediaQuery('(max-width:1200px)');
    let nCols = 3;
    if (showOneColumn) {
        nCols = 1;
    }
    // } else {
    //     nCols = props.artworks.length > 4 ? 3 : props.artworks.length > 2 ? 2 : 1;
    // }

    return (
        <>
            <Box sx={gridStyles}>
            <ImageList variant="masonry" cols={nCols} gap={8}>
                    {props.artworks ? props.artworks.map((item, index) => (
                        <Artwork
                            key={index}
                            item={ item }
                            asset={ item ? item : null } 
                            display={ item ? item.display : "full"}
                            alignment={ item && item.alignment ? item.alignment : "center"}
                            showTitle={ false }
                            showDescription={ false }
                        />
                    )) : ''}
            </ImageList>
            </Box>
        </>
      ); 
}

export default ArtworkGrid;