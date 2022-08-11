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
