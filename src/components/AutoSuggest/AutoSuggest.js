import React, { useCallback, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchKeywords } from "../../api/api-utils";
import { useNavigate } from "react-router-dom";

const AutoSuggest = () => {
  const [keywords, setKeywords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetchKeywords(searchTerm).then((data) => {
      const results = data?.response?.results ?? [];
      setKeywords(results.map((d) => d.webTitle));
    });
  }, [searchTerm]);
  const navigateToNews = useCallback(
    (term) => {
      navigate(`../news/${term}`, { replace: true });
    },
    [navigate]
  );
  useEffect(() => {
    if (value) {
      navigateToNews(value);
    }
  }, [value, navigateToNews]);
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      navigateToNews(searchTerm);
    }
  };
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={searchTerm}
      onInputChange={(event, newValue) => {
        if (event.type !== "blur") {
          setSearchTerm(newValue);
        }
      }}
      disablePortal
      id="auto-suggest"
      options={keywords}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search news" />}
      onKeyPress={onEnterPress}
    />
  );
};

export default AutoSuggest;
