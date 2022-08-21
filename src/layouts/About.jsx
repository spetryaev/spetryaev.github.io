import { Box } from '@mui/material';
import useDocumentTitle from '../utils/useDocumentTitle';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Artwork from '../components/artwork/Artwork';

const strapiUrl = process.env.REACT_APP_STRAPI_URL;
const token = process.env.REACT_APP_STRAPI_TOKEN;

const styles = {
    padding: {
        xs: '0 1rem 3.5rem',
        sm: '4rem 2.5rem 8rem 0'
    },
    fontSize: '1.5rem',
    lineHeight: '2.2rem'
}

const heroStyles = {
    img: {
        width: '100%',
        margin: 'auto'
    }
}

const blogStyles = {
    padding: {
        lg: '0 8rem'
    },
}

// const markdown = `
// Sergey Petryaev is a Southern Federal University graduate with a degree in Applied Informatics & Instrumentation. Pursuing a dream becoming a proficient web developer and a feature film animator/artist.

// Fullstack developer with Java (Spring) background mostly working on Salesforce platform. Skilled mentor and team lead always seeking for creativity and kindness in people.

// °˖✧◝(⁰▿⁰)◜✧˖° Interested in digital art and 2D animation with passion for great narrative with stunning visual experience. Using these tools for the pipeline: Adobe Creative Cloud (Photoshop, AfterEffects, Premiere Pro), TVPaint, Blender. Hoping to get hands on ToonBoom Harmony and Storyboard Pro someday.
// `

function About() {
    useDocumentTitle('About')

    const [val, setVal] = useState();

    const getData = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                strapiUrl + '/api/about-page?populate[heroBanner]=%2A',
                config
            );
        console.log(data);
        setVal(data.data);
    };
  
    useEffect(() => {
        getData();
    }, []);


    return (<Box sx={styles}>
                <Box sx={heroStyles}>
                    <Artwork
                        sx={heroStyles}
                        item={ val }
                        asset={ val ? val.heroBanner : null } 
                        display={ val && val.display ? val.display : "full"}
                        alignment={ val && val.alignment ? val.alignment : "center"}
                        showTitle={ false }
                        showDescription={ false }
                    />
                </Box>
                <Box sx={blogStyles}>
                    <ReactMarkdown children={val ? val.description : 'Loading..'} remarkPlugins={[remarkGfm]} />
                </Box>
                <Social/>
            </Box>);
}

function Social() {
    const socialStyles = {
        textAlign: 'center',
        a: {
            marginRight: '2rem',
            "&:last-child": { marginRight: 0 }
        },
    }
    const socialLinks = [
        'https://www.instagram.com/deflatableotter/',
        'https://www.artstation.com/spetryaev',
        'https://www.linkedin.com/in/spetryaev/',
        'https://www.youtube.com/channel/UCv42pQBVTuliIELRGivDBuA'
    ]

    return (<>
            <Box sx={{textAlign: 'center'}}>
                <p><b>Contact</b></p>
                <p>sbpetryaev@gmail.com</p>
            </Box>
            <Box sx={socialStyles}>
                {socialLinks.map((url, i) => (
                    <SocialIcon key={i} url={url} />
                ))}
            </Box>
    </>  
    );
}

export default About;