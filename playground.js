const STATUS = {
  Pending: "PENDING",
  FulFilled: "FULFILLED",
  Rejected: "REJECTED",
};

class MyPromise {
  constructor(executor) {
    this.status = STATUS.Pending;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === STATUS.Pending) {
        this.status = STATUS.FulFilled;
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === STATUS.Pending) {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === STATUS.FulFilled) onFulfilled(this.value);
    if (this.status === STATUS.Rejected) onRejected(this.reason);
    if (this.status === STATUS.Pending) {
      this.onFulfilledCallbacks.push(() => onFulfilled(this.value));
      this.onRejectedCallbacks.push(() => onRejected(this.reason));
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  // resolve("success");
  setTimeout(() => {
    resolve("成功");
  }, 1000);
})
  .then(
    (data) => console.log("success", data),
    (error) => console.error("failed", error)
  )
  .then((data) => console.log("hh", data));
