export const fetchKeywords = (searchTerm) => {
  return fetch(
    `https://content.guardianapis.com/tags?show-references=all&api-key=test&type=keyword&q=${searchTerm}&page-size=1000`
  ).then((resp) => resp.json());
};

export const fetchResults = (searchTerm, pageIndex = 1, pageSize = 10) => {
  return fetch(
    `https://content.guardianapis.com/search?api-key=test&q=${searchTerm}&show-fields=thumbnail,headline&show-tags=keyword&page=${pageIndex}&page-size=${pageSize}`
  ).then((resp) => resp.json());
};
