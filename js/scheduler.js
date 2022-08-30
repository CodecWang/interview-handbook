// 异步数量进行控制和调度
class Scheduler {
  constructor(max) {
    this.tasks = [];
    this.running = 0;
    this.max = max;
  }

  add(fn) {
    return new Promise((resolve, reject) => {
      fn.resolve = resolve;
      fn.reject = reject;

      this.tasks.push(fn);
      this.run();
    });
  }

  run() {
    if (this.running < this.max && this.tasks.length) {
      this.running += 1;
      const task = this.tasks.shift();
      task()
        .then((res) => task.resolve(res))
        .catch((err) => task.reject(err))
        .finally(() => {
          this.running -= 1;
          this.run();
        });
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler(4);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
