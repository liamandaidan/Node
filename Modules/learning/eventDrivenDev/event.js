const events = require("events");
const myEmitter = new events.EventEmitter();
function registerUser(userToAdd) {
  const newUserListener = (user) => {
    console.log(`WE HAVE A NEW USER @${user}`);
  };

  myEmitter.on("add user", newUserListener);

  myEmitter.emit("add user", userToAdd);
}
module.exports.registerUser = registerUser;
