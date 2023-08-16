import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { centerStyle } from "./themes/CommonStyles";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SendIcon from "@mui/icons-material/Send";
import BreadCrum from "./BreadCrum";
import image1 from "../assets/contact7.jpg";
import emailjs from "@emailjs/browser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Form1 } from "./Form1";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("it is cliked");

    emailjs
      .sendForm(
        "service_14doc9a",
        "template_m5u5tai",
        form.current,
        "LKS4sJ7QzWjxL5ve_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <React.Fragment>
      <BreadCrum
        title="Contact us !"
        desc="We can provide you with facilities, just contact us!"
        src={image1}
      />
      <div className="container-fluid">
        <Box className="container-fluid">
          <Box sx={{ ...centerStyle }}>
            <Typography variant="h6">Contact</Typography>
          </Box>
          <Box sx={{ ...centerStyle }}>
            <Typography variant="h4">Get in touch</Typography>
          </Box>
          <Box pt={10}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} p={2}>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      ...centerStyle,
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "5%",
                    }}
                  >
                    <AccountBalanceOutlinedIcon
                      sx={{ color: "blue", fontSize: 35 }}
                    />
                    <Typography pt={2} variant="h5">
                      Mobile number
                    </Typography>
                    <Typography pt={1}>(+91)8767367821</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      ...centerStyle,
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "5%",
                    }}
                  >
                    <AccountBalanceOutlinedIcon
                      sx={{ color: "blue", fontSize: 35 }}
                    />
                    <Typography pt={2} variant="h5">
                      Email
                    </Typography>
                    <Typography pt={1}>akhtarmoradi303@gmail.com</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      ...centerStyle,
                      flexDirection: "column",
                      textAlign: "center",
                      padding: "5%",
                    }}
                  >
                    <AccountBalanceOutlinedIcon
                      sx={{ color: "blue", fontSize: 35 }}
                    />
                    <Typography pt={2} variant="h5">
                      Address
                    </Typography>
                    <Typography pt={1}>Bangalor,karnataka,india</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* end cars */}
        </Box>
        <Box className="container-fluid mb-5 mt-5">
          <Stack className="container-fluid">
            <Form1 />
          </Stack>
          <GoogleMap />
        </Box>
      </div>
    </React.Fragment>
  );
}
