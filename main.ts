interface State {
  [key:string]: any
}

let data:State = { price: 5, quantity: 2 }
let target: any

class Dep {
  subscribers: any[]
  constructor() {
    this.subscribers = []
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub())
  }
}


Object.keys(data).forEach(key => {
  let internalVal = data[key]

  const dep = new Dep()
  Object.defineProperty(data, key, {
    get() {
      dep.depend()
      return internalVal
    },
    set(newVal: any) {
      internalVal = newVal
      dep.notify()
    }
  })
})

const watcher = (myFunc) => {
  target = myFunc
  target()
  target = null
}

watcher(() => {
  data.total = data.price * data.quantity
})

console.log(data.total)
data.price = 20
console.log(data.total)
data.quantity = 3
console.log(data.total)