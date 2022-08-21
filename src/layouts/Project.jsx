import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const heroStyles = {
    width: '78vw',
    img: {
        width: '100%',
        margin: '1rem'
    },
    span: {
        maxWidth: '100%'
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
        <Box sx={heroStyles} display="flex" justifyContent="center" alignItems="center">
            <ArtworkLazy data={ val ? val.heroBanner : null} display={ val ? val.display : "full"}/>
        </Box>
        <h1>{ val ? val.headline : '' }</h1>
        <ArtworkList artworkCollection={val ? val.artworkCollection : null}></ArtworkList>
        {/* <ArtworkGridCms artworks={val.data}></ArtworkGridCms> */}
    </>);
}

function ArtworkLazy(props) {
    console.log(props);
    return (<>
        <LazyLoadImage 
                alt={ props.data ? props.data.name : ''}
                src={ props.data ? props.data.url : '' }
                width={ props.display && props.display === "inset" ? "50%" : "100%"}
                placeholderSrc={ props.data ? props.data.formats.thumbnail.url : '' }
                height="auto"
                max-width="100%"
                effect="blur"
            />
    </>);
}

/**
 * Props:
 * - Strapi Asset
 * - Display (full | inset)
 */
function ArtworkList(props) {
    const alignmentAttributes = {
        "left": "flex-start",
        "center": "center",
        "right": "flex-end"
    }
    return (<>
        { props.artworkCollection ? props.artworkCollection.map((item, i) => (
            <Box sx={heroStyles} key={item.asset.hash} >
                <Box display="flex" justifyContent="center" alignItems={item ? alignmentAttributes[item.alignment] : "center"} flexDirection="column">
                    <ArtworkLazy data={ item.asset ? item.asset : null} display={ item ? item.display : "full"}/>
                    <h2>{ item.title }</h2>
                    <p>{ item.description }</p>
                </Box>
            </Box>
        )) : ''}
    </>);
}
export default Project;