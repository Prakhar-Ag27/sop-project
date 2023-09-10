import React from "react";
import Navbar from "./Navbar";
import { Divider, Grid, Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Navbar />
      <Grid container justifyContent="center">
        <Box
          mt={22} 
          bgcolor="#DDDDDD"
          textAlign="center"
          sx={{
            display: "flex",
            width: "947px",
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Header Text</Typography>
        </Box>
        <Box
        mt={10}
          bgcolor="#DDDDDD"
          textAlign="center"
          sx={{
            display: "flex",
            width: "611px",
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Header Text</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Home;
