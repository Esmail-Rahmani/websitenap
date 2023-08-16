import * as React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Typography } from "@mui/material";
import { centerStyle } from "../components/themes/CommonStyles";

import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Counter from "./Counter";
import Lottie from "react-lottie";
// import * as animationData from "./pinjump.json";
import data1 from "../assets/data4.json";
import data2 from "../assets/data12.json";
import data4 from "../assets/data9.json";
import data6 from "../assets/data13.json";

export default function HomPagePaper() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: data1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: data2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: data4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: data6,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container-fluid mb-5">
      <Box
        flexDirection="column"
        spacing={0}
        sx={{
          zIndex: 3,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
          width: { md: "70%", xs: "100%" },
          margin: "auto",
          paddingTop: "5%",
          paddingBottom: "3%",
          overflowX: "hidden",
        }}
      >
        <Lottie
          style={{ borderRadius: "50%" }}
          options={defaultOptions3}
          height={100}
          width={100}
        />
        {/* <BusinessIcon zIndex={2} sx={{ fontSize: 50, color: "primary" }} /> */}
        <Typography sx={{ fontFamily: "serif" }} variant="h3" py={2} zIndex={2}>
          A bout the company
        </Typography>
        <Typography
          variant="p"
          p={1}
          letterSpacing={1}
          mb={2}
          className="lh-lg"
          zIndex={2}
        >
          Regarding the business With more than three years of expertise,
          siteNap is a global provider of IT services and software solutions.
          Young, eager, and highly qualified engineers founded the company. In
          order to assist customers and businesses in reducing their rising IT
          costs without sacrificing quality, siteNap was founded. We are a
          one-stop engineering consulting firm that may serve as a mentor for
          any of your projects, with a focus on cost containment without
          sacrificing quality. Our mission is to understand your company, work
          with you toward a same purpose, and support you in achieving it. We
          appreciate the ongoing relationships we build with our clients, which
          eventually turn into an extension of their businesses.
        </Typography>

        {/* <div className="w-50 ">
          <hr
            style={{
              height: "1px",
              border: "none",
              color: "#333",
              backgroundColor: "#333",
            }}
          />
        </div> */}
        <div className="w-25 pt-3">
          <hr
            style={{
              height: "1px",
              border: "none",
              color: "#333",
              backgroundColor: "#333",
            }}
          />
        </div>
      </Box>
      <Box className="container-fluid my-5" zIndex={10}>
        <Counter />
      </Box>

      <Box className="my-5" zIndex={10}>
        <Box
          zIndex={10}
          sx={{ ...centerStyle, flexDirection: "column", padding: "4%" }}
        >
          <Typography variant="h3" zIndex={10}>
            Our services
          </Typography>
          <Typography pt={2} zIndex={2}>
            siteNap focus on the core area of your business.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} p={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <AppShortcutIcon
                  zIndex={10}
                  sx={{ color: "blue", fontSize: 35 }}
                />
                <Typography pt={2} variant="h5">
                  Mobile apps
                </Typography>
                <Typography pt={1} zIndex={2}>
                  Expand your business and dreams to life in a mobile
                  application for greater convenience.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <WebIcon zIndex={10} sx={{ color: "blue", fontSize: 35 }} />
                <Typography zIndex={10} pt={2} variant="h5">
                  Website design
                </Typography>
                <Typography zIndex={10} pt={1}>
                  With the best showcase or website, customers can find you,
                  whenever and wherever.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <TerminalIcon
                  zIndex={10}
                  sx={{ color: "blue", fontSize: 35 }}
                />
                <Typography zIndex={10} pt={2} variant="h5">
                  SEO
                </Typography>
                <Typography zIndex={10} pt={1}>
                  We increase the quality of traffic to your website through
                  organic search engine results.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                zIndex={10}
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <ShoppingCartCheckoutIcon
                  zIndex={10}
                  sx={{ color: "blue", fontSize: 35 }}
                />
                <Typography zIndex={10} pt={2} variant="h5">
                  E-commerce softwares
                </Typography>
                <Typography zIndex={10} pt={1}>
                  Through e-commerce software, you can buy and sell goods and
                  have services over the Internet.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <ManageAccountsIcon
                  zIndex={10}
                  sx={{ color: "blue", fontSize: 35 }}
                />
                <Typography zIndex={10} pt={2} variant="h5">
                  Management systems
                </Typography>
                <Typography zIndex={10} pt={1}>
                  Automate your management processes in order to lessen the
                  difficulty of large tasks.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                className="shadow1"
                sx={{
                  ...centerStyle,
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "5%",
                }}
              >
                <AddBusinessIcon
                  zIndex={10}
                  sx={{ color: "blue", fontSize: 35 }}
                />
                <Typography zIndex={10} pt={2} variant="h5">
                  Graphic desing
                </Typography>
                <Typography zIndex={10} pt={1}>
                  We organize your information to help deliver a message in the
                  most impactful way possible.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Container>
        <Row zIndex={10}>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Box>
              <Lottie
                options={defaultOptions1}
                alt="Nature"
                className="lottie1"
                width="600"
                height="400"
              ></Lottie>
            </Box>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className=" pt-5 d-flex flex-column align-items-start pt-3">
              <Typography pt={10} zIndex={10} variant="h5" className="pt-3">
                Why we do team work ?
              </Typography>
              <Typography
                style={{ lineHeight: "36px" }}
                zIndex={10}
                variant="p"
                className="pt-3 "
              >
                Our team members will know your business. We will invest time in
                really getting to know your business so that we can plan and
                develop the right custom solution. By understanding your
                business's objectives, our software development group can
                assemble the ideal solution to your problem to align with your
                needs.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "40px" }}
                className="mt-4"
              >
                Know more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container py={3}>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 1 }}>
            <Box>
              <Lottie
                options={defaultOptions2}
                alt="Nature"
                className="lottie1"
                width="500"
                height="300"
              ></Lottie>
            </Box>
          </Col>
          <Col p={3} md={6}>
            <div className="pt-5 d-flex flex-column align-items-start pt-3 pl-3">
              <Typography variant="h5" className="pt-3" zIndex={10}>
                Who are our members?
              </Typography>
              <Typography zIndex={10} variant="p" className="pt-3 lh-lg">
                Our team members are equipped with technical skills. We have the
                specialized knowledge and expertise of engineers, like front-end
                developers, back-end developers, mobile app developers, and
                graphic designers, which helps us write correct and efficient
                code and gives us a deep understanding of how the software
                works. Our team's main goal is to find the right solution to the
                problem. To achieve this goal, we always collaborate with
                clients and customers to hear from their side and develop
                accordingly.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "40px" }}
                className="mt-4"
                zIndex={10}
              >
                Know more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container py={3}>
        <hr />
      </Container>
      <Container>
        <Row zIndex={10}>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Box>
              <Lottie
                options={defaultOptions4}
                alt="Nature"
                className="lottie1 lottie3"
                width="600"
                height="400"
              ></Lottie>
            </Box>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="pt-5 d-flex flex-column align-items-start pt-3">
              <Typography zIndex={10} variant="h5" className="pt-3">
                How do we develop it ?
              </Typography>
              <Typography zIndex={10} variant="p" className="pt-3 lh-lg">
                Today, customers control businesses. This era is known as the
                customer's age because the customer has so many options to
                choose from, especially in the SaaS space. Our team's
                collaboration with clients and problems is one way of ensuring
                clients stay happy and don't seek out a new service or product
                that fills their needs. When customer service reps work together
                on products, answers are delivered in a more efficient manner.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "40px" }}
                className="mt-4"
              >
                Know more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
