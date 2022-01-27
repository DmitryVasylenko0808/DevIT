function findNumbers(str)  {
    var strArr = str.split(' ');
    var result = [];

    for(let i = 0; i < strArr.length; i++) 
        if (!isNaN(strArr[i])) 
        result.push(parseFloat(strArr[i]));
    
    return result;
}

var text1 = "У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе";
console.log(findNumbers(text1));