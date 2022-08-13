const promise = new Promise((resolve, reject) => {
  const res = false;
  // An asynchronous operation.
  if (res) {
    resolve("Resolved!");
  } else {
    reject(Error("Error"));
  }
});
//Method 1
/*
promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
*/
//Method 2 with catch
promise.then((res) => {
  console.log(res);
});
promise.catch((err) => {
  console.log("THERE WAS AN ERROR!");
});
