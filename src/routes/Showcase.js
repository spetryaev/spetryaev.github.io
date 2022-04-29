import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';

var artworks = [];

for (var i = 0; i < 28; i++) {
    artworks.push({key: "aw" + i, label: i, src: "https://cdna.artstation.com/p/assets/images/images/027/844/486/large/sergey-petryaev-daria.jpg?1592735347"});
    i++;
    artworks.push({key: "aw" + i, label: i, src: "https://cdna.artstation.com/p/assets/images/images/029/542/300/large/sergey-petryaev-2-15-19.jpg?1597873039"});
    i++;
    artworks.push({key: "aw" + i, label: i, src: "https://cdnb.artstation.com/p/assets/images/images/034/600/045/large/sergey-petryaev-b2yfctramvk.jpg?1612730177"});
    i++;
    artworks.push({key: "aw" + i, label: i, src: "https://cdnb.artstation.com/p/assets/images/images/036/603/607/large/sergey-petryaev-spain-nature-study.jpg?1618129249"});
}

function Showcase() {
    return (<ArtworkGrid artworks={artworks}></ArtworkGrid>);
}

export default Showcase;