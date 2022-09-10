function factorial(n){
    var factorialValue = 1;
    for(let i = 1; i<=n; i++){
        factorialValue = factorialValue*i;
    }
    return factorialValue;
}
var result = factorial(10);
console.log(result);