class EventBus {
    constructor() {
        this.observers = {};
    }


    subscribe(event, callback) {
        if (!this.observers[event]) {
            this.observers[event] = [];
        }
        this.observers[event].push(callback);


        return () => {
            this.observers[event] = this.observers[event].filter(cb => cb !== callback);
        };
    }


    notify(event, data) {
        if (this.observers[event]) {
            this.observers[event].forEach(callback => callback(data));
        }
    }
}

export const shopObserver = new EventBus();