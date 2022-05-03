import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import { getImage } from '../utils/assetHelper';


const artworks = getImage(4);


function Project() {
    return (<ArtworkGrid artworks={artworks}></ArtworkGrid>);
}

export default Project;