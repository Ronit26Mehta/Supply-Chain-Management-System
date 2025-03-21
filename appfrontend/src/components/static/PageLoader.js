import React from "react"; 

import LinearProgress  from '@mui/material/LinearProgress';
import Backdrop from '@mui/material/Backdrop';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import '../../css/App.css';

export const PageLoader = () => (
    <div> 
        <Backdrop open className="backdrop-design">
            <center>
                <Box>
                    <img src="/logo.jpg" alt="logo" id="app-logo"/>
                    <br/>
                    <br/>
                    <Typography variant="h7" color="textSecondary">Connecting to the chain. Please check your connection.</Typography>
                    <br/>
                    <br/>
                    <LinearProgress color="secondary" />   
                </Box> 
            </center>
        </Backdrop> 
    </div>
) 