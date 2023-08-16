import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GrainIcon from "@mui/icons-material/Grain";
import React from "react";

const styles = {
  testBackground: {
    height: "210px",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10,
    margin: "1% 2% 5% 2%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
};

const BreadCrum = (props) => {
  return (
    <>
      <Box pt={10} pl={{ md: "2.2%", xs: "3%" }} sx={{ maxWidth: "90%" }}>
        <div
          role="presentation"
          // onClick={handleClick}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
              color="#000000"
              href="/about"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              HOME
            </Link>
            <Link
              // underline="hover"

              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
              color="#000000"
              href="/about"
            >
              <WhatsAppIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              About us
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Contact us
            </Typography>
          </Breadcrumbs>
        </div>
      </Box>
      <Box
        container
        justify="center"
        alignItems="center"
        style={styles.testBackground}
        sx={{
          bgcolor: " 	#F8F8FF",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.600),rgba(0, 0, 0, 0.5)), url(${
            props && props.src
          })`,
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
          }}
        >
          <Box pl={3}>
            <Typography
              variant="h5"
              pb={1}
              sx={{
                color: "white",
                fontSize: { lg: "60px", xs: "50px" },
              }}
            >
              {props && props.title}
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontSize: { lg: "24px", sm: "18px", xs: "16px" },
              }}
            >
              {props && props.desc}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BreadCrum;
