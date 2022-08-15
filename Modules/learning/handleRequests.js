const url = require("url");
function handleGetRequest(req, res) {
  const { pathname } = new URL(req.url);
  let data = {};

if(pathname === '/projects'){
    data = await getProjects();
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(data));
}
res.statusCode = 404;
return res.end('Requested resource does not exist.')

}
function handlePostRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};
  
  if(pathname === '/projects'){
      data = await getProjects();
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(data));
  }
  res.statusCode = 404;
  return res.end('Requested resource does not exist.')
  
  }
  function handleDeleteRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};
  
  if(pathname === '/projects'){
      data = await getProjects();
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(data));
  }
  res.statusCode = 404;
  return res.end('Requested resource does not exist.')
  
  }
  function handlePutRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};
  
  if(pathname === '/projects'){
      data = await getProjects();
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(data));
  }
  res.statusCode = 404;
  return res.end('Requested resource does not exist.')
  
  }
module.exports.handleGetRequest = handleGetRequest;
module.exports.handlePostRequest = handlePostRequest;
module.exports.handleDeleteRequest = handleDeleteRequest;
module.exports.handlePutRequest = handlePutRequest;