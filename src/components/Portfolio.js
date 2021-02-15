import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import tour from "../images/tour.png";
import birthday from "../images/birthday.png";
import reviews from "../images/reviews.png";
import project2 from "../images/javascript-fullstack.jpg";

// import classes from "*.module.css";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,

    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Grid container justify="center" spacing={2}>
        {/* project1 */}
        <Grid item xs={12} sm={8} md={3}>
          {/* <Grid item xs={12} sm={8} md={6}> */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tour"
                height="300"
                image={birthday}
              />
              <CardContent height>
                <Typography gutterBottom variant="h5">
                  Birthday
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum,
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://github.com/amansviet/birthday"
                target="_blank"
                size="small"
                color="primary"
              >
                GitHub
              </Button>
              <Button
                href="https://amansviet.github.io/birthday/"
                target="_blank"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project2 */}
        <Grid item xs={12} sm={8} md={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="tour" height="300" image={tour} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tours
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error animi vel iusto accusantium debitis facilis voluptas
                  placeat quaerat, exercitationem soluta vitae sit quasi
                  repellendus porro recusandae, fuga magni culpa cupiditate.
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://github.com/amansviet/tours"
                target="_blank"
                size="small"
                color="primary"
              >
                GitHub
              </Button>
              <Button
                href="https://amansviet.github.io/tours/"
                target="_blank"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* /*Project3 */}
        <Grid item xs={12} sm={8} md={3}>
          {/* <Grid item xs={12} sm={8} md={6}> */}
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="tour"
                height="300"
                image={reviews}
              />
              <CardContent height>
                <Typography gutterBottom variant="h5">
                  Reviews
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum,
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://github.com/amansviet/reviews"
                target="_blank"
                size="small"
                color="primary"
              >
                GitHub
              </Button>
              <Button
                href="https://amansviet.github.io/reviews/"
                target="_blank"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project1 */}
        <Grid item xs={12} sm={8} md={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="tour" height="150" image={tour} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tours
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error animi vel iusto accusantium debitis facilis voluptas
                  placeat quaerat, exercitationem soluta vitae sit quasi
                  repellendus porro recusandae, fuga magni culpa cupiditate.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://github.com/amansviet/tours"
                target="_blank"
                size="small"
                color="primary"
              >
                GitHub
              </Button>
              <Button
                href="https://amansviet.github.io/tours/"
                target="_blank"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error animi vel iusto accusantium debitis facilis voluptas
                  placeat quaerat, exercitationem soluta vitae sit quasi
                  repellendus porro recusandae, fuga magni culpa cupiditate.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project3 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error animi vel iusto accusantium debitis facilis voluptas
                  placeat quaerat, exercitationem soluta vitae sit quasi
                  repellendus porro recusandae, fuga magni culpa cupiditate.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                GitHub
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project4 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error animi vel iusto accusantium debitis facilis voluptas
                  placeat quaerat, exercitationem soluta vitae sit quasi
                  repellendus porro recusandae, fuga magni culpa cupiditate.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>{" "}
          */}
        {/* </Grid> */} */
      </Grid>
    </Box>
  );
};

export default Portfolio;
