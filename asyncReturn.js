var fetch = require('sync-request');

function func(num){
  var res = fetch('GET','https://jsonplaceholder.typicode.com/todos/'+num)
  return res.getBody().toString('utf8');
};

console.log(func(4));
