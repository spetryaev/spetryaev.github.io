import Masonry from "react-masonry-css";
import Artwork from "../artwork/Artwork";
import './Grid.scss';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

var artworks = [];

for (var i = 0; i < 20; i++) {
    artworks.push({key: "aw" + i, label: i});
}

artworks = artworks.map(item => {
    return <Artwork key={item.key} content={item.label}></Artwork>
});

function Grid() {
    return(<Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column">

        {artworks}
    </Masonry>);
}

export default Grid;