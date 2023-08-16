import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import AdbIcon from "@mui/icons-material/Adb";
import SideBarDrawer from "./SideBarDrawer";

import { Link } from "react-router-dom";
import image1 from "../assets/a1.jpg";
import { fontFamily, fontWeight } from "@mui/system";

const Appbar = () => {
  const [visible, setVisible] = useState(false);
  // const [go, setGo] = useState("");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              width: { md: "100%", xs: "0px" },
            }}
          >
            {/* <Box
              component="img"
              src={image1}
              alt="ksa"
              width={40}
              height={40}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            /> */}
            <Typography
              variant="h5"
              className="logo1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <h3
                style={{ fontWeight: 1200, color: "black", fontWeight: "bold" }}
              >
                S
              </h3>
              iteNap
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                component="a"
                href="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Home
                </Button>
              </Typography>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  About us
                </Button>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Blog
                </Button>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Contact us
                </Button>
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon onClick={showDrawer} />
            </IconButton>
            <SideBarDrawer
              showDrawer={showDrawer}
              onClose={onClose}
              visible={visible}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            siteNap
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
