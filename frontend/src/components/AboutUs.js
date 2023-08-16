import * as React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Divider from "@mui/material/Divider";
import Image from "../assets/header5.jpg";
import LanguageIcon from "@mui/icons-material/Language";

import { centerStyle } from "./themes/CommonStyles";
import LogoCrousel from "./LogoCrousel";
import av0 from "../assets/esmail.jpeg";
import av1 from "../assets/naji3.png";
import av2 from "../assets/hussain.jpg";
import av3 from "../assets/sixth.jpeg";
import av4 from "../assets/omid.jpeg";
import av5 from "../assets/baryali.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${Image})`,
    backgroundColor: "#fff",
    display: "flex",
    displayDirection: "column",
    height: "50vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "2rem",
    marginTop: "3%",
    flexGroth: 1,
  },
  text_hro: {
    zIndex: 10,
    color: "white",
  },
};

const AboutUs = () => {
  return (
    <div>
      <Box className="img-fluid  " style={styles.paperContainer}>
        <span className={styles.text_hro}>
          <Typography variant="h4" component="h3" color="white">
            About us !
          </Typography>
        </span>
      </Box>
      <Box sx={{ ...centerStyle, bgcolor: "#ffffff" }}>
        <Typography
          variant="h4"
          gutterBottom
          mt={4}
          direction="column"
          sx={{ flexDirection: "column" }}
        >
          Who we are ?
        </Typography>

        <Divider
          sx={{
            marginTop: "18px",
            height: "0px",
            fontSize: "50px",
            width: { md: "200px", xs: "150px" },
            fontWeight: "bold",

            padding: "1px",
            bgcolor: "	#FFFF00",
          }}
        />

        <Box width="90%" textAlign="center">
          <Typography
            p={5}
            lineHeight={{ md: 2.5, xs: 1.7 }}
            spacing={20}
            letterSpacing={1.3}
            mb={2}
            with={{ md: "80%", xs: "100%", lineSpacing: "10px" }}
          >
            <span style={{}}> S</span>iteNap was established to provide
            business-friendly technological solutions rather than only those
            that were technically superior but might not have met the company's
            primary goals. We are able to map the business impact on each
            component of the technology solution that is being created and
            developed, which helps us reach this goal through a systematic
            methodology. Our goal at siteNap is to make it as simple as possible
            for employees to track, evaluate, and enhance performance across all
            devices and locations.
          </Typography>
        </Box>
      </Box>
      {/* <Container>
        <Counter />
      </Container> */}
      <Container>
        <LogoCrousel />
      </Container>

      <Box sx={{ bgcolor: "#fffff" }}>
        <Box sx={{ ...centerStyle, flexDirection: "column", padding: "4%" }}>
          <Typography variant="h4">Members</Typography>
          <Typography pt={4}>Brief introduction of our team members</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4} sx={{ p: { xs: 8, md: 15 } }}>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
                className="shadow1"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av0}
                  sx={{ width: 70, height: 70 }}
                />
                <Typography fontSize={33} pt={2} variant="h4">
                  Esmail rahmani
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  Software enginyeer
                </Typography>
                <Typography pt={1}>
                  Mobile application and web develper with over 3 years of
                  experience in IT industry. I am with highly leading and
                  analytical skill.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    href="https://www.facebook.com/Esmailrahmani100?mibextid=LQQJ4d"
                  >
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/esmailrahmani/"
                  >
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large" href="https://wa.me/+917875780816">
                    <WhatsAppIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av1}
                  className="img-thumbnail"
                  sx={{ width: 70, height: 70 }}
                />
                <Typography fontSize={33} pt={2} variant="h4">
                  Akhtar mohammad
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  full stack develper
                </Typography>
                <Typography pt={1}>
                  A patient and smart software engineer with proven ability and
                  highly skilled in full stack (end-to-end) develpment with
                  idustry experience.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    href="https://www.facebook.com/akhtarmohammad.naji?mibextid=LQQJ4d"
                  >
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large" href="https://twitter.com/home">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/akhtar-mohammad-naji-2389a4180/"
                  >
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large" href="https://najinet.com/">
                    <LanguageIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av2}
                  className="img-thumbnail"
                  sx={{ width: 70, height: 70 }}
                />
                <Typography pt={2} variant="h4">
                  Hussain Gawhary
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  backend develper
                </Typography>
                <Typography>
                  A creative backend develper with leverage analytical skill and
                  strong attension to detail in order to delever orginal and
                  effecient web solution.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    href="https://www.facebook.com/profile.php?id=100009097541221&mibextid=LQQJ4d"
                  >
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/hussain-gawhari-6599a9172"
                  >
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large" href="https://wa.me/+917030187457">
                    <WhatsAppIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av3}
                  sx={{ width: 70, height: 70 }}
                />
                <Typography pt={2} variant="h4">
                  Abdul qahar
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  software enginyeer
                </Typography>
                <Typography pt={1}>
                  Web and mobile app develper with 4+ years of experience in
                  designing, develping softwares, testing, debugging and
                  training staff.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton size="large">
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large">
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large">
                    <WhatsAppIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av4}
                  sx={{ width: 70, height: 70 }}
                />
                <Typography pt={2} variant="h4">
                  Omid
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  Digital marketer
                </Typography>
                <Typography pt={1}>
                  Search engine optimizer, Email Marketer, google analitics,
                  Sale psychologist, Google Ads, copywriter, content marketing
                  and social media marketing.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    href="https://www.facebook.com/omid.nikan111?mibextid=LQQJ4d"
                  >
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large">
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton size="large" href="https://nikan.fun/">
                    <LanguageIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "7%",
                  height: "400px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={av5}
                  className="img-thumbnail"
                  sx={{ width: 70, height: 70 }}
                />
                <Typography pt={2} variant="h4">
                  Baryali navabi
                </Typography>
                <Typography pt={0.7} variant="p" sx={{ color: "" }}>
                  Graphic designer
                </Typography>
                <Typography pt={1}>
                  Experienced graphic designer with 3+ years of experience
                  excited to help Yelp expand their social media engagement with
                  captivating video and static assets.
                </Typography>
                <Box
                  spacing={10}
                  p={3}
                  sx={{
                    ...centerStyle,
                    flexDirection: "row",

                    justifyContent: "space-between",

                    width: "100%",
                    spacing: 6,
                    fleGgrow: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    href="https://www.facebook.com/barialai.nawabi.9?mibextid=LQQJ4d"
                  >
                    <FacebookOutlinedIcon
                      sx={{ color: "#3b5998", fontSize: "30px" }}
                    />
                  </IconButton>
                  <IconButton size="large">
                    <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/barialai-nawabi-09831321a/"
                  >
                    <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.growedge.org/?fbclid=PAAaYGR5gSyGB7Nvhs_5UFGarI3k7fSQ082fH0WAbbfDGPBzFwb-FSVoyOtV0"
                  >
                    <LanguageIcon sx={{ color: "#33cc33", fontSize: "30px" }} />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
