const american = {
  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = {
  name:'Bob',
  hello() {
    super.hello();
    // console.log('hello ' + this.name);
  }
}

Object.setPrototypeOf(bob,american);
bob.hello();