const query = location.search;

function parseQuery(query) {
  const queryString = query.substring(1);
  const queryParams = queryString.split("&");
  const queryParamsObject = {};
  queryParams.forEach((param) => {
    const [key, value] = param.split("=");
    queryParamsObject[key] = value;
  });
  return queryParamsObject;
}
