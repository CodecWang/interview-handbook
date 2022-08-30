class EventBus {
  constructor() {
    this.tasks = [];
  }

  emit(...args) {
    this.tasks.forEach((fn) => fn.apply(this, args));
  }

  addListener(fn) {
    this.tasks.push(fn);
  }
}
