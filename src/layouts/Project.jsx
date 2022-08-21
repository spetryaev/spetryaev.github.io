import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Artwork from '../components/artwork/Artwork';

const strapiUrl = process.env.REACT_APP_STRAPI_URL;
const token = process.env.REACT_APP_STRAPI_TOKEN;


function Project() {
    const [val, setVal] = useState();
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname.split( '/' )[1] === "projects") {
            const slug = location.pathname.split( '/' )[2];
            const url = strapiUrl + '/api/art-projects?filters[slug]=' + slug + '&populate[heroBanner][populate][0]=%2A&populate[artworkCollection][populate][1]=asset';
            const getData = async () => {
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
            getData();
        }
    }, [location]);

    return (<>
             <Artwork
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