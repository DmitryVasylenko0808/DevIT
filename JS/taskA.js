function primeArray(arrayLeng)  {
    var arr = [];
    var value;

    for(let i = 0; i < arrayLeng; i++) {
        value = Math.floor(Math.random() * 100);
        if (isPrime(value)) arr.push(value);
        else i--;
    }  
    return arr;
}

function isPrime(numb)  {
    if (numb % 2 === 0)
      return numb === 2;

    for (let q = 3; q * q <= numb; q+=2)
      if (numb % q === 0)
        return false;

    return true;
}

console.log(primeArray(5));