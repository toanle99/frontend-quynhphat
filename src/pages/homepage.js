import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import img_top from "../assets/images/Rectangle 3.png";

export const Home = () => {
  return (
    <>
      <Header />
      <Box className="main">
        <Box className="img-top">
          <img src={img_top} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
