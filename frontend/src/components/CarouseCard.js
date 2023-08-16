import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwipeableViews from "react-swipeable-views";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import {
  flexBetween,
  dFlex,
  carouselDot,
  carouselImage,
  fixedBottom,
} from "../components/themes/CommonStyles";
import "./CarouselCard.css";
import { Link } from "react-router-dom";

const CarouselCard = ({ data }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = data.files.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };

  return (
    <Box>
      <Box
        className="carouselCard"
        sx={{
          boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px `,
          flexGrow: 1,
          bgcolor: "#ffff",
          position: "relative",

          padding: "0px 0px 5px 0px",
          borderRadius: "10PX",
        }}
      >
        {data.files.length && (
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {data.files.map((files, index) => {
              return (
                <div key={files.fileType}>
                  <Link to={`/singleCard/${data._id}`}>
                    <Box
                      component="img"
                      className="img-thumbnail"
                      sx={carouselImage}
                      src={`http://localhost:8080/${files.filePath}`}
                      alt={files.id}
                    ></Box>
                  </Link>
                </div>
              );
            })}
          </SwipeableViews>
        )}

        <Box sx={{ ...fixedBottom, paddingBottom: "20px" }}>
          <MobileStepper
            sx={{ backgroundColor: "transparent" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                sx={carouselDot}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <ChevronRightIcon />
              </Button>
            }
            backButton={
              <Button
                size="small"
                sx={carouselDot}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeftIcon />
              </Button>
            }
          />
        </Box>
        <Box>
          <Box sx={{ ...flexBetween, padding: "10px" }}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6"> {data.title}</Typography>

              <Typography
                component="h5"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  // color: "#000",
                  color: `rgba(0, 0, 0, 0.6)`,
                  // overflowWrap: "break-word",
                }}
              >
                {data.desc}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/singleCard/${data._id}`}
              >
                <Box sx={dFlex}>
                  <React.Fragment>
                    <Typography component="h5" pr={1}>
                      More...
                    </Typography>
                    <InfoOutlinedIcon size={18} style={{ color: "#303030" }} />
                  </React.Fragment>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
