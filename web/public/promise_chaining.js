let basic_resolve_promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("complete"), 1000);
});

let basic_reject_promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("error"), 1000);
});

basic_resolve_promise.then(
  result => alert(`Resolve promise result ${result}`),
  error => alert(`Resolve promise error ${error}`),
).finally(() => alert(`Resolve promise is finish`));

basic_reject_promise.catch(
  error => {
    alert(`Reject promise catch ${error}`); // O Reject promise catch error
    return 'this is default value when error occur';
  }
).then(
  result => alert(`Reject promise result ${result}`), // O Reject promis result this is default value when error occur
  error => alert(`Reject promise error ${error}`), // X
).finally(() => alert(`Resolve promise is finish`)); // O Resolve promise is finish