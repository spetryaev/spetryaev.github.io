import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import getImages from '../utils/assetHelper';


const artworks = getImages(35);


function Featured() {
    return (<ArtworkGrid artworks={artworks}></ArtworkGrid>);
}

export default Featured;