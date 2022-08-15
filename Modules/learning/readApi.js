const http = require("http");
const URL_JSON =
  "https://static-assets.codecademy.com/Courses/Learn-Node/http/data.json";
const handleGetRequest = (req, res) => {
  // Write external API request code here

  const newUrl = new URL(URL_JSON);

  const options = {
    hostname: newUrl.hostname,
    path: newUrl.pathname,
    method: 'GET',
  };
  console.table(options);
  const request = http.request(options, (response) => {
    let data = '';
    response.on('data', (stream) => {
      data += stream;
    });
    response.on('end', () => {
      console.log('Got data', data)
      res.end(data);
    });
    console.log(data);
  });

  request.end();
};

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});
