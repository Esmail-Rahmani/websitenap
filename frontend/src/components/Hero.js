import { Box, Paper, Typography } from "@mui/material";
import Typical from "react-typical";
import React from "react";
import Image from "../assets/background.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const styles = {
  paperContainer: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(${Image})`,
    // backgroundColor: "#fff",
    // display: "flex",
    // displayDirection: "column",
    // height: "100vh",
    // backgroundPosition: "center center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // justifyContent: "center",
    // alignItems: "center",
    // color: "#fff",
    // fontSize: "2rem",
    // paddingTop: "15%",
    // position: "relative",
  },
  // text_hro: {
  //   zIndex: 1,
  //   color: "white",
  // },
};

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div
      // style={styles.paperContainer}
      className="responsive1"
      xs={{ position: "relative" }}
    >
      <Particles
        id="tsparticles"
        // className="tsparticlesConvasEl"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 100,

          interactivity: {
            events: {
              // onClick: {
              //   enable: true,
              //   mode: "push",
              // },
              onHover: {
                enable: true,
                // mode: "repulse",
              },
              resize: true,
              width: "90px",
              height: "80px",
            },

            modes: {
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#ffffff",
              distance: 130,
              enable: true,
              opacity: 0.4,
              width: 1.5,
            },

            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              value: 50,
              density: {
                enable: true,
                area: 900,
              },
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      <Paper
        className="new12"
        sx={{
          alignItems: "center",
          pl: "10px",
          display: "flex",
          width: { xs: "250px", md: "380px" },
          height: { xs: "150px" },
          backgroundColor: `rgba(83, 79, 92, 0.41)`,

          // opacity: 0.7,
          // backgroundColor: "Black",
          // bgcolor: "black",
          borderRadius: "7px",
          zIndex: 1,
        }}
      >
        <span className="text_hro">
          <Typography variant="h4" component="h3" color="white">
            We develop
          </Typography>
          <Typical
            steps={[
              "Website 🪐",
              1000,
              "Mobile app 🃏",
              1000,
              "Softwares 👨‍💻",
              1000,
              "Management Sof... 📑",
              1000,
              "E-softwares 💸",
              1000,
            ]}
            loop={Infinity}
            wrapper="e"
          />
        </span>
      </Paper>
    </div>
  );
}
