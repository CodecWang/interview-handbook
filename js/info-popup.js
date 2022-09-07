// promise 实现定时链式调用
class Popup {
  constructor() {
    this.queue = Promise.resolve();
  }

  open() {
    console.log("open");
    return this;
  }

  wait(delay) {
    this.queue = this.queue.then(() => {
      console.log(`wait ${delay}s`);
      return new Promise((resolve, _) => {
        setTimeout(() => {
          resolve();
        }, delay * 1000);
      });
    });
    return this;
  }

  disappear() {
    this.queue = this.queue.then(() => {
      console.log("disappear");
    });
    return this;
  }

  sendLog() {
    this.queue = this.queue.then(() => {
      console.log("send log");
    });
    return this;
  }
}

const popup = new Popup();
popup.open().wait(2).disappear().wait(3).sendLog();
