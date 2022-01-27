function f(str)  {
    var count = 1;
    var resStr = "";

    for(let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1] && isNaN(str[i])) count++;
        else {
            if (count === 1) resStr += str[i];
            else {
                resStr = resStr + str[i] + count;
                count = 1;
            }
        }
    }

    str = resStr;
    return str;
}

console.log(f("dysssdduyyy"));