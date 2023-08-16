import { Box, Grid, Stack } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { getSingle } from "../api/api";

const initialStat = {
  title: "",
  date: "",
  desc: "",
  files: [],
};

const SingleCard = () => {
  const [data, setData] = useState(initialStat);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log("id", id);
  const { title, date, desc, files } = data;
  console.log("title", title);
  console.log("desc", desc);
  console.log("files", files);
  console.log("date", date);

  // const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider1",
    // variableWidth: true,
    // dots: true,
    // infinite: true,
    // speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide2(next),
    afterChange: (current) => setActiveSlide2(current),
  };
  //slider end
  const getSingleData = async () => {
    try {
      const sigleData = await getSingle(id);
      setData(sigleData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Grid container pt={9} style={{ margin: "20px" }}>
        <Grid item xs={12} md={6}>
          <Slider {...settings}>
            {files.map((item) => (
              <div container key={item.id} className="text-center">
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                  alt="The house from the offer."
                  src={`http://localhost:8080/${item.filePath}`}
                />
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12} md={6}>
          <h6
            style={{
              color: "#6f6d6d",
              fontSize: "22px",
            }}
          >
            Project detials:
          </h6>
          <h3>{title}</h3>

          <div>{date.split(" ").slice(0, 4).join(" ")}</div>
          <div className="w-50 ">
            <hr
              style={{
                height: "1px",
                border: "none",
                color: "#333",
                backgroundColor: "#333",
                paddingLeft: "3%",
              }}
            />
          </div>
          <Stack sx={{ paddingRight: "6%", lineHeight: "2" }}>{desc}</Stack>
        </Grid>
      </Grid>
      {/* <Box
        py={5}
        sx={{
          bgcolor: "#f2f2f2",
          justifyItems: "center",

          textAlign: "center",
          marginTop: "3%",
          paddingLeft: { md: 20, xs: 2 },
          paddingRight: { md: 10, xs: 2 },
          height: { md: 100, xs: 180 },
        }}
        >
        <Grid container spacing={2} flexDirection={{ md: "row", xs: "column" }}>
          <Grid item xs={12} md={6}>
            <Box textAlign="start ">
              <Typography variant="h5">Get to know tody!</Typography>
              <Typography variant="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "40px", marginTop: 2 }}
              >
                Know more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
};
export default SingleCard;
