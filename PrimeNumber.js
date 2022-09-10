function primeNumber(num){
    for(var i =2; i<num; i++){
        if(num%i==0){
            return "Your number is not a prime number";
        }
    }

    return "This is a prime number";
}

var result = primeNumber(14);
console.log(result);