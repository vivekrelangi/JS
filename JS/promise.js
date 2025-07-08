const promise = new Promise((resolve, reject) => {
    // Start asynchronous operation
    setTimeout(() => {
      resolve("Operation completed successfully");
    }, 2000);
  });
  promise.then(result => console.log(result));
  promise.catch(error => console.error(error));
  promise.finally(() => console.log("Operation complete"));