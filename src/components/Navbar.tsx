import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" sx={{boxShadow:0  }}>
      <Toolbar sx={{ bgcolor: "#DDDDDD", height: '92px', boxShadow: 0}}>
        <Typography variant='h6'>NavBar</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
