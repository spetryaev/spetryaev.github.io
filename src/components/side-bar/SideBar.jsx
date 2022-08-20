import './SideBar.scss';
import Header from '../header/Header';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function SideBar(props) {
    const drawerWidth = 280;

    const [val, setVal] = useState();

    const getData= async () => {

        const token = "dd3ee882aba1e0d8f0b6e32cf0de0f26851b4339e0f5118e8a59a5d9edfac943c134d838acf5a38285591b4d54ac7bc9e7cd3fc858c8ff43f066cd9d7954a1b351c07b12e9431e85ef77fa27eaa45e7f9b935c38458ef078351472f8f1df1216cfa8fa200842af913fcec56af54df0574a0e16f4cad684028e3c809c7ba2d563";
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const { data } = await axios.get(
                'http://localhost:1337/api/art-projects',
                config
            );
        console.log(data);

        const projectItems = [];
        data.data.forEach(item => {
            projectItems.push({
                "name": item.slug,
                "label": item.title,
                "uri": "projects/" + item.slug
            });
        });
        setVal(projectItems);
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
                        {props.navItems.map((item, index) => (
                            <ListItem sx={{p:0}} key={item.name}><NavLink className={({ isActive }) => (isActive ? 'side-bar__nav_active' : 'side-bar__nav_inactive')} to={item.uri} key={item.name}>{item.label}</NavLink></ListItem>
                        ))}
                        <Divider light className="side-bar__nav_divider"/>
                        {val ? val.map((item, index) => (
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