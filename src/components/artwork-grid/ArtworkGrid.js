import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Lightbox from '../lightbox/Lightbox';
import { useState } from "react";
import { ImageList } from "@mui/material";

var artworks = [];

for (var i = 0; i < 20; i++) {
    artworks.push({key: "aw" + i, label: i});
}

const gridStyles = {
    padding: {
        xs: '0',
        sm: '40px 40px 0 0'
    }
}

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
        <Box>
            <Box className="artwork-grid" sx={gridStyles}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {artworks.map((item, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index} sx={itemStyles}>
                            <Artwork key={item.key} content={item.label}></Artwork>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Lightbox/>
        </Box>
      ); 
}

export default ArtworkGrid;