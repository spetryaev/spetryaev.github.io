import './SideBar.scss';
import Header from '../header/Header';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
import React, { useEffect, useState } from "react";

const strapiUrl = process.env.REACT_APP_STRAPI_URL;
const token = process.env.REACT_APP_STRAPI_TOKEN;


function SideBar(props) {
    const drawerWidth = 280;

    const [categories, setCategories] = useState();
    const [projects, setProjects] = useState();

    const getData= async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        let { data } = await axios.get(
                strapiUrl + '/api/art-projects?sort=createdAt:desc',
                config
            );
        const projectItems = [];        
        data.data.forEach(item => {
            projectItems.push({
                "name": item.slug,
                "label": item.title,
                "uri": "projects/" + item.slug
            });
        });
        setProjects(projectItems);


        data = await axios.get(
                strapiUrl + '/api/art-categories?sort=title:asc',
                config
            );
        const categoryItems = [];        
        data.data.data.forEach(item => {
            categoryItems.push({
                "name": item.slug,
                "label": item.title,
                "uri": item.slug
            });
        });

        setCategories(categoryItems);
        
        console.log("Fetched categories and projects")
    };
  
    useEffect(() => {
        getData();
    }, []);

    return (
            <Drawer
                sx={{
                display: { xs: 'none', sm: 'block' },
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRight: 'none'
                }
                }}
                variant="permanent"
                anchor="left"
            >
                <div className="side-bar">
                    <Header></Header>
                    <List className="side-bar__nav">
                        {categories && categories ? categories.map((item, index) => (
                            <ListItem sx={{p:0}} key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        )) : null}
                        <Divider light className="side-bar__nav_divider"/>
                        {projects && projects ? projects.map((item, index) => (
                            <ListItem sx={{p:0}} key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        )) : null}
                        <Divider light className="side-bar__nav_divider"/>
                        {props.subNavItems.map((item, index) => (
                            <ListItem sx={{p:0}} key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
    );
}

export default SideBar;