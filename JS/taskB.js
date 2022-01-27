function findNumbers(str)  {
    if (!str) return null;

    var strArr = str.split(' ');
    var result = [];

    for(let item of strArr) 
        if (!isNaN(item)) 
        result.push(parseFloat(item));
    
    return result;
}

var text1 = "У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе";
console.log(findNumbers(text1));