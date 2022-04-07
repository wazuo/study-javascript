function a() {
  console.log('called');
}

a();

let d = (function(){

  console.log('called ');
  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called')
  }
  function publicFn() {
    console.log('publicFn is called:' + privateVal++)
  }
  return {
    publicVal,
    publicFn
  };
})()

d.publicFn();
d.publicFn();
d.publicFn();
d.publicFn();
console.log(d.publicVal)

let b = (1 + 2) * 3;
console.log(b)

let c = function() {
  console.log('called');
}();