import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

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

function Category() {
    const [val, setVal] = useState();
    const location = useLocation();
    const slug = location.pathname.split( '/' )[1];
    const url = 'http://localhost:1337/api/art-categories?filters[slug]=' + slug + '&populate[artworks][populate][1]=asset';
    const getData= async () => {
        
        const token = "dd3ee882aba1e0d8f0b6e32cf0de0f26851b4339e0f5118e8a59a5d9edfac943c134d838acf5a38285591b4d54ac7bc9e7cd3fc858c8ff43f066cd9d7954a1b351c07b12e9431e85ef77fa27eaa45e7f9b935c38458ef078351472f8f1df1216cfa8fa200842af913fcec56af54df0574a0e16f4cad684028e3c809c7ba2d563";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                url,
                config
            );
        console.log("Fetching category: " + slug);
        setVal(data.data[0]);
    };
  
    useEffect(() => {
        getData();
    }, [location]);

    return (<ArtworkGrid artworks={val ? val.artworks : null}></ArtworkGrid>);
}

export default Category;