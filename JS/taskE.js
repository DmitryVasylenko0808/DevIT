function rand()  {
    var numbers = [];

    return function randNumb()  {
        if (numbers.length === 101) return new Error('Error!');
        var value = Math.floor(Math.random() * 101);

        if (numbers.includes(value)) randNumb();
        else numbers.push(value);

        return numbers[numbers.length - 1];
    }
}

var getRandNumber = rand();
var n = 0;

while (n <= 101) {
    console.log(getRandNumber());
    n++;
}