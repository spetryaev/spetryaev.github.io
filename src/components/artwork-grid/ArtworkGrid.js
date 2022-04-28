import Artwork from "../artwork/Artwork";
import './ArtworkGrid.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

var artworks = [];

for (var i = 0; i < 20; i++) {
    artworks.push({key: "aw" + i, label: i});
}

const styles = {
    padding: {
        xs: '0',
        sm: '40px 40px 0 0'
    }
}
function ArtworkGrid() {
    return (
        <Box className="artwork-grid" sx={styles}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {artworks.map((item, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <Artwork key={item.key} content={item.label}></Artwork>
                </Grid>
            ))}
            </Grid>
        </Box>
      );
}

export default ArtworkGrid;