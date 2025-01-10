class MyEmitter {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, cb) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
      this.subscribers[event].push(cb);
    } else {
      this.subscribers[event].push(cb);
    }

    return this;
  }

  unsubscribe(event, fn) {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(
        (cb) => cb !== fn
      );
    }

    return this;
  }

  emit(event, args) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((cb) => cb(args));
    }

    return this;
  }
}

const emitter = new MyEmitter();

const fn1 = (a) => console.log(a * 2);
const fn2 = (a) => console.log(a * 3);
const fn3 = (a) => console.log(a * 4);

emitter.subscribe("click", fn1);
emitter.subscribe("click", fn2);
emitter.subscribe("click", fn3);

emitter.emit("click", 2);

emitter.unsubscribe("click", fn3);

emitter.emit("click", 3);
