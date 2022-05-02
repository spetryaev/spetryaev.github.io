import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import getImages from '../utils/assetHelper';


const artworks = getImages(4);


function Project() {
    return (<ArtworkGrid artworks={artworks}></ArtworkGrid>);
}

export default Project;