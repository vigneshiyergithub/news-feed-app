import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const AppBarHeader = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const onHomeClick = () => {
    navigate("../");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onHomeClick}
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News Feed App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
