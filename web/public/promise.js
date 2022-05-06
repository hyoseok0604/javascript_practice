let basic_resolve_promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("complete"), 1000);
});

let basic_reject_promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("error"), 1000);
});

basic_resolve_promise.then(
  result => alert(`Resolve promise ${result}`),
  error => alert(`Resolve promise ${error}`),
);

basic_reject_promise.then(
  result => alert(`Reject promise ${result}`),
  error => alert(`Reject promise ${error}`),
);

basic_reject_promise.catch(
  error => alert(`Rejcet promise catch ${error}`),
);

basic_resolve_promise.finally(
  () => alert(`Resolve promise is finish`),
);

basic_reject_promise.finally(
  () => alert(`Resolve promise is finish`),
);