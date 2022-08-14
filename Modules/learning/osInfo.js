const os = require("os");

const server = {
  type: os.type(),
  arch: os.arch(),
  uptime: os.uptime(),
};

function showServerInfo() {
  console.table(server);
  return server;
}
function cool(x){
    return x*2;
}
module.exports.showServerInfo = showServerInfo;
module.exports.cool = cool;
module.exports.moreServerInfo = () => {console.log("More info ...")};
