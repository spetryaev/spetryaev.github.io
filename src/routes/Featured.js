import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';

var artworks = [];


for (var i = 0; i < 28; i++) {
    var n = Math.ceil(Math.random() * 4) ;
    artworks.push({key: "aw" + i, label: i, src: "/assets/images/art-" + n + ".jpg"});
}

function Featured() {
    return (<ArtworkGrid artworks={artworks}></ArtworkGrid>);
}

export default Featured;