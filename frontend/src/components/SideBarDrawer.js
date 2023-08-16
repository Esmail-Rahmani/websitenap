import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Drawer } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import React from "react";
import { Link } from "react-router-dom";

const SideBarDrawer = (props) => {
  // const [size, setSize] = useState();
  return (
    <>
      <Drawer
        title=" SiteNape"
        // color="red"
        placement="right"
        onClose={props.onClose}
        visible={props.visible}
        onClick={props.showDrawer}
        size="small"
        width="250px"
        zIndex={1100}
      >
        {/* <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          <Button
            // onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            About us
          </Button>
        </Link> */}
        {/* <Typography
          component="a"
          href="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button sx={{ my: 2, color: "white", display: "block" }}>Home</Button>
        </Typography> */}
        <List>
          <ListItem disablePadding>
            <Typography
              component="a"
              href="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "black" }} primary="Home page" />
              </ListItemButton>
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AddBusinessIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "black" }} primary="About us" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ContentPasteSearchIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "black" }} primary="Blog" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MedicalInformationIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "black" }} primary="Contact us" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBarDrawer;
