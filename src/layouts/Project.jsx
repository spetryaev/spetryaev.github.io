import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const heroStyles = {
    img: {
        width: '95%',
        margin: '1rem'
    }
}

function Project() {
    const [val, setVal] = useState();
    const location = useLocation();
    const slug = location.pathname.split( '/' )[2];
    const url = 'http://localhost:1337/api/art-projects?filters[slug]=' + slug + '&populate[heroBanner][populate][0]=%2A&populate[artworkCollection][populate][1]=asset';
    const getData= async () => {
        
        const token = "dd3ee882aba1e0d8f0b6e32cf0de0f26851b4339e0f5118e8a59a5d9edfac943c134d838acf5a38285591b4d54ac7bc9e7cd3fc858c8ff43f066cd9d7954a1b351c07b12e9431e85ef77fa27eaa45e7f9b935c38458ef078351472f8f1df1216cfa8fa200842af913fcec56af54df0574a0e16f4cad684028e3c809c7ba2d563";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                url,
                config
            );
        console.log(data);
        setVal(data.data[0]);
    };
  
    useEffect(() => {
        getData();
    }, [location]);

    return (<>
        <Box sx={heroStyles}>
            <img src={ val && val.heroBanner ? val.heroBanner.url : ''} alt={ val && val.heroBanner ? val.heroBanner.name : ''} loading='lazy'></img>
        </Box>
        <h1>{ val ? val.headline : '' }</h1>
        <ArtworkList artworkCollection={val ? val.artworkCollection : null}></ArtworkList>
        {/* <ArtworkGridCms artworks={val.data}></ArtworkGridCms> */}
    </>);
}

function ArtworkList(props) {
    return (<>
        { props.artworkCollection ? props.artworkCollection.map((item, i) => (
            <Box sx={heroStyles} key={item.asset.hash} >
                <img src={item.asset.url} alt={item.asset.name} loading='lazy'></img>
                <h2>{ item.title }</h2>
                <p>{ item.description }</p>
            </Box>
        )) : ''}
    </>);
}
export default Project;