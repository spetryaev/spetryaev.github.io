import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import axios from 'axios';
import React, { useEffect, useState } from "react";

const strapiUrl = process.env.REACT_APP_STRAPI_URL;
const token = process.env.REACT_APP_STRAPI_TOKEN;

function Featured() {
    const [val, setVal] = useState();

    const getData = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                strapiUrl + '/api/featured-page?populate[artworks]=%2A',
                config
            );
        console.log(data);
        setVal(data.data);
    };
  
    useEffect(() => {
        getData();
    }, []);
    
    return (<ArtworkGrid artworks={val ? val.artworks : null}></ArtworkGrid>);
}

export default Featured;