import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/myimage.JPG";
import Typed from "react-typed";

//css styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  // subtext: {
  //   color: "tan",
  //   fontSize: "20px",
  // },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Amandeep"></Avatar>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Amandeep Bhatia"]} typeSpeed={40}></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Software Developer", "Web Developer", "Web designer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h6">
        I am self motivated Web Developer with a desire to always learn more
        <br />
        and become better at whatever I am doing. Passionate about Web
        Development
        <br /> and strive to better myself as a developer, and the community as
        a whole.
        <br />
        Frameworks and languages:
        <br />
        {/* <Typed
          strings={[
            "javaScript",
            "HTML5",
            "CSS3",
            "Bootstrap3",
            "jQuery",
            "ReactJS",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop */}
        {/* ></Typed> */}
        javaScript, HTML5, CSS3, Bootstrap3, jQuery ,ReactJS
      </Typography>
    </Box>
  );
};

export default Header;
