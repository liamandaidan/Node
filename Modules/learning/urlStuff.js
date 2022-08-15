const url = require("url");
const querystring = require("querystring");
const URL_TO_PARSE =
  "https://www.example.com/p/a/t/h?prop1=value1&prop2=value2";
function urlPath() {
  //get url items
  const newUrl = new URL(URL_TO_PARSE);
  const host = newUrl.hostname; // example.com
  const pathname = newUrl.pathname; // /p/a/t/h
  const searchParams = newUrl.searchParams; // {query: 'string'}
  console.log(searchParams);
  //create url items
  const createdUrl = new URL("https://www.example.com");
  createdUrl.pathname = "/p/a/t/h";
  createdUrl.search = "?query=string";
  console.log(createdUrl.toString());
}

function queryStrings() {
  const str = "prop1=value1&prop2=value2";
  console.log(querystring.parse(str));
  const props = { props1: "value1", prop2: "value2" };
  console.log(querystring.stringify(props));
  const escape = querystring.escape(URL_TO_PARSE);
  console.log(escape);
  const unescape = querystring.unescape(escape);
  console.log(unescape);
}

function codeAcadExample() {
  const url = "https://www.example.com/p/a/t/h?course=node&lesson=http";

  const queryToParse = url.split("?")[1];


  const parsedQuery = querystring.parse(queryToParse);
  //WOW just learned this below lol...
  parsedQuery.exercise = "querystring";
  const modifiedQueryString =  querystring.stringify(parsedQuery);
  console.log(modifiedQueryString);
}

codeAcadExample();
