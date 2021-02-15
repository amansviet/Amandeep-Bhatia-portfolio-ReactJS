import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenySlider from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Slider,
} from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Home, AssignmentInd, Apps, ContactMail } from "@material-ui/icons";

import avatar from "../images/myimage.JPG";
import Footer from "./Footer";

//css styles

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Amandeep Bhatia",
    listPath: "/",
  },
  // {
  //   listIcon: <AssignmentInd />,
  //   listText: "AbouMe",
  //   listPath: "/AboutMe",
  // },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Amandeep" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <Typography
              onClick={toggleSlider("left", true)}
              style={{ color: "tan" }}
              variant="h5"
            >
              Amandeep
            </Typography>
            <IconButton onClick={toggleSlider("left", true)}>
              <ArrowForwardIosIcon style={{ color: "tomato" }} />
            </IconButton>
            <section className={classes.rightToolbar}>
              <Footer />
            </section>
            {/* <Footer className={classes.rightToolbar} /> */}
            <MobilRightMenySlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobilRightMenySlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
