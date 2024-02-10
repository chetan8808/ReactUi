import React from 'react'
import {AppBar,Box,Toolbar,Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import "../styles/HeaderStyles.css";

const Navbaar = () => {
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, my: 2 }}>Buggu Restorent & Bar</Typography>
                        <Box>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink activeClassName="active" to={"/"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/menu"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>

                </AppBar>
            </Box>
        </>

    )
}

export default Navbaar