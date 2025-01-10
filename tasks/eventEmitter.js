class EventEmitter {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, cb) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
      this.subscribers[event].push(cb);
    }
    this.subscribers[event].push(cb);

    return {
      unsubscribe: () => {
        this.subscribers[event].pop();
      },
    };
  }

  emit(event, args) {
    if (this.subscribers[event]) {
      //   for (let i = 0; i < this.subscribers[event].length; i++) {
      //     const cb = this.subscribers[event][i];
      //     cb(...args);
      //   }
      this.subscribers[event].forEach((cb) => cb(...args));
    }
  }
}
