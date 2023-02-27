import React from 'react';
import {AppBar, Box, InputBase, Toolbar, Typography} from "@mui/material";
import {Autocomplete} from "@react-google-maps/api";
import SearchIcon from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant={"h5"} className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display={"flex"}> {/* This is like a div   */}
                    <Typography variant={"h6"} className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder={"Search....."} classes={{root: classes.InputRoot, input: classes.inputInput}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;