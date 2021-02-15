import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiButtonNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": { fill: "tomato", fontSize: "1.8rem" },
    },
  },
});

const Footer = () => {
  const Classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={Classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        href={"https://github.com/amansviet"}
        target="_blank"
      />
      <BottomNavigationAction
        className={Classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        href={"https://www.linkedin.com/in/amanbhatia-canada/"}
        target="_blank"
      />
    </BottomNavigation>
  );
};

export default Footer;
