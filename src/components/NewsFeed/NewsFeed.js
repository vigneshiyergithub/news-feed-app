import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchResults } from "../../api/api-utils";
import NewsFeedList from "../NewsFeedList";

const useStyles = makeStyles({
  root: {
    paddingTop: "2rem",
  },
  title: {
    textAlign: "left",
    paddingLeft: "1rem",
  },
  pagination: {
    display: "flex",
    flexDirection: "row-reverse",
    marginBottom: "1rem",
    paddingRight: "1rem",
  },
});

const NewsFeed = () => {
  const { searchKey } = useParams();
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchResults(searchKey, currentPage).then((data) => {
      const response = data?.response;
      setPages(response.pages);
      setResults(response.results);
    });
  }, [searchKey, currentPage]);
  const classes = useStyles();
  const onPageChange = (e, pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Results for {searchKey}
      </Typography>
      <NewsFeedList data={results} />
      <Pagination
        count={pages}
        color="primary"
        size="small"
        showFirstButton
        showLastButton
        page={currentPage}
        onChange={onPageChange}
        className={classes.pagination}
      />
    </Container>
  );
};

export default NewsFeed;
