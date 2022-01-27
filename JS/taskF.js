class ConcurrecyQueue {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.requests = [];
    this.running = [];
  }

  enqueue(request) {
    this.requests.push(request);
  }

  deQueue() {
    return this.running.shift();
  }

  queuing() {
    while ((this.running.length < this.concurrency) && this.requests.length) {
      const promise = this.requests.shift();
      promise.then(message => {
        console.log(message);
        this.deQueue();
        this.queuing();
      });
      this.running.push(promise);
    }
  }
}

function createReq(count) {
    var arr = [];

    for(let i = 0; i < count; i++) {
        let p = new Promise(function(resolve) {
            let time = Math.floor(Math.random() * 11) * 1000;
            setTimeout(() => {
                resolve(`Request${i} completed, time: ${time / 1000}s`);
            }, time)
        })
        arr.push(p);
    }
    return arr;
}

var arrProm = createReq(10);
const concQueue = new ConcurrecyQueue(3);

arrProm.forEach(req => concQueue.enqueue(req))
concQueue.queuing();