import React from "react";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CountUp from "react-countup";
import { fontSize } from "@mui/system";
import { Typography } from "@mui/material";

const Counter = () => {
  const Counter1 = (start, end) => (
    <CountUp
      style={{ fontFamily: "serif", fontWeight: "bold", fontSize: "20px" }}
      start={0}
      end={240}
      duration={3}
      useEasing={true}
      useGrouping={true}
    />
  );
  return (
    <div style={{ backgroundColor: "#e4f2f0", padding: "3%" }}>
      <div className="d-flex justify-content-around">
        <div className="text-center">
          <div>
            <CrisisAlertIcon
              sx={{
                fontSize: { sm: "24px", md: "38px" },
                paddingBottom: "4px",
              }}
            />
          </div>
          <div>
            <CountUp
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              start={0}
              end={32}
              duration={30}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <Typography
            sx={{ fontSize: { sm: "16px", md: "18px" }, paddingTop: "3px" }}
          >
            Projects
          </Typography>
        </div>
        <div className="text-center">
          <div>
            <WorkOutlineIcon
              sx={{
                fontSize: { sm: "24px", md: "38px" },
                paddingBottom: "4px",
              }}
            />
          </div>
          <div>
            {" "}
            <CountUp
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              start={0}
              end={180}
              duration={20}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <Typography
            sx={{ fontSize: { sm: "14px", md: "16px" }, paddingTop: "3px" }}
          >
            Tasks
          </Typography>
        </div>
        <div className="text-center">
          <div>
            <SentimentSatisfiedAltIcon
              sx={{
                fontSize: { sm: "24px", md: "38px" },
                paddingBottom: "4px",
              }}
            />
          </div>
          <div>
            {" "}
            <CountUp
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              start={0}
              end={18}
              duration={35}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <Typography
            sx={{ fontSize: { sm: "16px", md: "18px" }, paddingTop: "3px" }}
          >
            Clients
          </Typography>
        </div>
        <div className="text-center">
          <div>
            <ThumbUpOffAltIcon
              sx={{
                fontSize: { sm: "24px", md: "38px" },
                paddingBottom: "4px",
              }}
            />
          </div>
          <div>
            {" "}
            <CountUp
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              start={0}
              end={634}
              duration={5}
              useEasing={true}
              useGrouping={true}
            />
          </div>
          <Typography
            sx={{ fontSize: { sm: "16px", md: "18px" }, paddingTop: "3px" }}
          >
            Rieviews
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Counter;
