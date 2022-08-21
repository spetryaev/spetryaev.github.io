import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Artwork from '../components/artwork/Artwork';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const heroStyles = {
    
}

function Project() {
    const [val, setVal] = useState();
    const location = useLocation();
    const slug = location.pathname.split( '/' )[2];
    const url = 'http://localhost:1337/api/art-projects?filters[slug]=' + slug + '&populate[heroBanner][populate][0]=%2A&populate[artworkCollection][populate][1]=asset';
    const getData = async () => {
        
        const token = "dd3ee882aba1e0d8f0b6e32cf0de0f26851b4339e0f5118e8a59a5d9edfac943c134d838acf5a38285591b4d54ac7bc9e7cd3fc858c8ff43f066cd9d7954a1b351c07b12e9431e85ef77fa27eaa45e7f9b935c38458ef078351472f8f1df1216cfa8fa200842af913fcec56af54df0574a0e16f4cad684028e3c809c7ba2d563";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                url,
                config
            );
        console.log("Fetching project: " + slug);
        setVal(data.data[0]);
    };
  
    useEffect(() => {
        if (location.pathname.split( '/' )[1] === "projects") {
            getData();
        }
    }, [location]);

    return (<>
             <Artwork
                    sx={heroStyles}
                    item={ val }
                    asset={ val ? val.heroBanner : null } 
                    display={ val ? val.display : "full"}
                    alignment={ val && val.alignment ? val.alignment : "center"}
                    showTitle={ true }
                    showDescription={ true }
                />
        <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center">
                
                <h1>{ val ? val.headline : '' }</h1>
        </Box>
        
        {/* Content box */}

            <ArtworkList artworkCollection={val ? val.artworkCollection : null}></ArtworkList>
        
    </>);
}

// function ArtworkLazy(props) {
//     console.log(props);
//     return (<>
//         <LazyLoadImage 
//             alt={ props.data ? props.data.name : ''}
//             src={ props.data ? props.data.url : '' }
//             width={ props.display && props.display === "inset" ? "50%" : "100%"}
//             placeholderSrc={ props.data ? props.data.formats.thumbnail.url : '' }
//             height="auto"
//             max-width="100%"
//             effect="blur"
//         />
//     </>);
// }

/**
 * Props:
 * - Strapi Asset
 * - Display (full | inset)
 */
function ArtworkList(props) {
    
    return (<>
            { props.artworkCollection ? props.artworkCollection.map((item, i) => (
                <Artwork
                    key={item.asset.hash}
                    item={ item } 
                    asset={ item.asset ? item.asset : null } 
                    display={ item ? item.display : "full" } 
                    alignment={ item && item.alignment ? item.alignment : "center" }
                    showTitle={ true }
                    showDescription={ true }
                />
            )) : ''}
    </>);
}
export default Project;