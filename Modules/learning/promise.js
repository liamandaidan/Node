const promise = new Promise((resolve, reject) => {
  const res = true;
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

asyncAwait();

function newPromise() {
  const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve("Lucky winner!");
    } else {
      reject(new Error("Unlucky!"));
    }
  });

  testLuck
    .then((message) => {
      console.log(message); // Log the resolved value of the Promise
    })
    .catch((error) => {
      console.error(error); // Log the rejected error of the Promise
    });
}

function asyncAwait() {
  // Creating a new promise that runs the function in the setTimeout after 5 seconds.
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 5000);
  });

  // Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction.
  const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult.
    const finalResult = await newPromise;

    // Logging the result of the promise to the console
    console.log(finalResult); // Output: All done!
  };

  asyncFunction();
}
