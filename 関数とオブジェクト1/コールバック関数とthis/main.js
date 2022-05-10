window.name = 'John';

const person ={
    name: 'Tom',
    hello: function() {
        console.log('hello ' + this.name);
   }
}
person.hello();

function fn(ref) {
    ref();
}

fn(person.hello);
