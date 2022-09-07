class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, callback) {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push(callback);
  }

  once(name, callback) {
    if (!this.events[name]) this.events[name] = [];
    const that = this;
    function handler() {
      callback.apply(null, arguments);
      that.off(name);
    }
    this.events[name].push(handler);
  }

  emit(name, ...args) {
    const callbacks = this.events[name];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...args));
    }
  }

  off(name) {
    if (this.events[name]) {
      delete this.events[name];
    }
  }
}

const eventBus = new EventEmitter();
eventBus.once("e1", (name, age) => console.log(name, age));
eventBus.once("e1", (name, age) => console.log("hello", name, age));
eventBus.on("e2", (name, age) => console.log(name, age));
eventBus.on("e2", (name, age) => console.log("hello", name, age));

eventBus.emit("e1", "wang", 23);
eventBus.emit("e1", "li", 24);
eventBus.emit("e2", "zhang", 23);
eventBus.off("e2");
eventBus.emit("e2", "hei", 24);
