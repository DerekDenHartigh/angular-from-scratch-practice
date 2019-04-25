"use strict";

return $q(function(resolve, reject){
    this.doSomething()
    .then((data)=>{
        resolve(data)  // a thenable return of the data
    .catch((err)=>{
        console.error(err); // log out the error
        reject(err); // return the error
    });
    })
})