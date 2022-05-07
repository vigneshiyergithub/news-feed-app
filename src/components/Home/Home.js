import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutoSuggest from "../AutoSuggest";

const useStyles = makeStyles({
  root: {
    paddingTop: "5rem",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h2" gutterBottom>
        News Lister
      </Typography>
      <AutoSuggest />
    </Container>
  );
};

export default Home;
