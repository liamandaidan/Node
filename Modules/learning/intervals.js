//send out alert every 5 sec!
const showLog = () => {
  setInterval(() => {
    console.log("HELLO");
  }, 5000);

  setInterval(() => {
    console.log("DONE.");
    myStopFunction();
  }, 12000);
};
function myStopFunction() {
    clearInterval(showLog);
  }
showLog();

