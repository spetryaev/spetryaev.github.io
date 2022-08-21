import ArtworkGrid from '../components/artwork-grid/ArtworkGrid';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const strapiUrl = process.env.REACT_APP_STRAPI_URL;
const token = process.env.REACT_APP_STRAPI_TOKEN;

function Category() {
    const [val, setVal] = useState();
    const location = useLocation();

    useEffect(() => {
        const slug = location.pathname.split( '/' )[1];
        const url = strapiUrl + '/api/art-categories?filters[slug]=' + slug + '&populate[artworks][populate][1]=asset';
        
        const getData= async () => {
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
        getData();
    }, [location]);

    return (<ArtworkGrid artworks={val ? val.artworks : null}></ArtworkGrid>);
}

export default Category;