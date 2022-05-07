import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "1rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 4,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    flex: 1,
    cursor: "pointer",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  tag: {
    margin: "0.5rem",
    cursor: "pointer",
  },
  headline: {
    cursor: "pointer",
  },
}));

const NewsFeedList = ({ data = [] }) => {
  return (
    <Container>
      {data.map((item, key) => {
        return <NewsFeedItem key={key} newsItem={item} />;
      })}
      {data.length === 0 && (
        <Typography component="h5" variant="h5">
          No Results Found
        </Typography>
      )}
    </Container>
  );
};

const NewsFeedItem = ({ newsItem = {} }) => {
  let navigate = useNavigate();
  const classes = useStyles();
  const onTagClick = (tag) => {
    navigate(`../news/${tag}`, { replace: true });
  };
  console.log(newsItem);
  const navigateToArticle = () => {
    window.open(newsItem.webUrl, "_blank");
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={
          newsItem?.fields?.thumbnail ??
          "https://dummyimage.com/300.png/09f/fff"
        }
        title={newsItem.webTitle}
        onClick={navigateToArticle}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="h5"
            onClick={navigateToArticle}
            className={classes.headline}
          >
            {newsItem.fields.headline}
          </Typography>
          <div className={classes.tagsContainer}>
            {newsItem.tags.map((tag) => {
              return (
                <Chip
                  label={tag.webTitle}
                  key={tag.id}
                  className={classes.tag}
                  onClick={(e) => onTagClick(tag.webTitle)}
                />
              );
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default NewsFeedList;
