class Promise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.status === "pending") {
      this.status = "resolved";
      this.value = value;
      this.onResolvedCallbacks.forEach((fn) => fn());
    }
  }
  reject(reason) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fn) => fn());
    }
  }
  then(onResolved, onRejected) {
    onResolved = typeof onResolved === "function" ? onResolved : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };
    if (this.status === "resolved") {
      onResolved(this.value);
    }
    if (this.status === "rejected") {
      onRejected(this.reason);
    }
    if (this.status === "pending") {
      this.onResolvedCallbacks.push(() => onResolved(this.value));
      this.onRejectedCallbacks.push(() => onRejected(this.reason));
    }
  }
}

Promise.all = (promises) => {
  if (!Array.isArray(promises)) throw new TypeError("Must pass array");

  let count = 0;
  let hasError = false;
  const data = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (res) => {
          data[i] = res;
          count++;
          if (count === promises.length) resolve(data);
        },
        (error) => {
          if (!hasError) reject(error);
          hasError = true;
        }
      );
    }
  });
};

Promise.race = (promises) => {
  if (!Array.isArray(promises)) throw new TypeError("Must pass array");

  let hasValue = false;
  let hasError = false;

  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(
        (res) => {
          if (!hasError && !hasValue) resolve(res);
          hasValue = true;
        },
        (error) => {
          if (!hasError && !hasValue) reject(error);
          hasError = true;
        }
      );
    }
  });
};
