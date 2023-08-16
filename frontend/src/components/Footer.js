import { Stack } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Footer = () => {
  return (
    <div className="mt-5">
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="container-fluid">
            <hr className="py-3" />
          </div>
        </div>
      </div>
      <Stack className="cardn mx-3">
        <div className="row mb-4 ">
          <div className="col-md-4 col-sm-11 col-xs-11">
            <div className="footer-text pull-left">
              <div className="d-flex">
                <h1
                  className="font-weight-bold mr-2 px-3"
                  style={{
                    // color: "#16151a",
                    backgroundColor: "#1976d2",
                    fontWeight: "600",
                    color: "white",
                    borderRadius: "3px",
                  }}
                >
                  S
                </h1>
                <h1 style={{ color: "#1976d2" }}>iteNap</h1>
              </div>
              <p className="card-text">
                Providing high-quality software products as well as graphic
                design, digital marking, and online advertising with high
                customer satisfaction are what siteNap does.
              </p>

              <div className="social mt-2 mb-3">
                <i>
                  <FacebookOutlinedIcon
                    sx={{ color: "#3b5998", fontSize: "30px" }}
                  />
                </i>
                <i className="fab fa-twitter twitter-bg">
                  <TwitterIcon sx={{ color: "#55acee", fontSize: "30px" }} />
                </i>
                <i className="fab fa-twitter twitter-bg">
                  <LinkedInIcon sx={{ color: "#3b5998", fontSize: "30px" }} />
                </i>
                <i className="fab fa-google-plus-g google-bg">
                  <GoogleIcon sx={{ color: "#dd4b39", fontSize: "30px" }} />
                </i>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>

          <div className="col-md-2 col-sm-4 col-xs-4">
            <h5 className="heading">Services</h5>
            <ul>
              <li>Websites</li>
              <li>Mobile apps</li>
              <li>Development</li>
              <li>Softwares</li>
              <li>Graphic design</li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-4">
            <h5 className="heading">Industries</h5>
            <ul className="card-text">
              <li>Digital marketing</li>
              <li>Finance</li>
              <li>Public Sector</li>
              <li>Management systems</li>
              <li>E-commerce</li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-4 col-xs-4">
            <h5 className="heading">Company</h5>
            <ul className="card-text">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>

        <div className="divider mb-4"></div>

        <div
          className=" d-flex justify-content-between "
          style={{ fontSize: "10px" }}
        >
          <div className="">
            <div className="">
              <p>
                <i className="fa fa-copyright"></i> 2022 siteNap services
              </p>
            </div>
          </div>

          <div className="">
            <div className="pull-right mr-4 d-flex policy">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Footer;
