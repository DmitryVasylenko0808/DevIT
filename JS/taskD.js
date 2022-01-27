function get(obj, path)  {
    var pathObj = path.split('.');

    for(let key of pathObj) {
        if (!obj.hasOwnProperty(key)) return null;
        obj = obj[key];
    }
    return obj;
}

const exampleObj = {a:{b:{c:5}}};
const exampleArr = [{a:{b:[{c:4}, {c:5}]}},
                    {a:{b:[{c:6}, {c:7}]}}
                ];

console.log(get(exampleArr, '0.a.b.1.c'));
console.log(get(exampleObj, 'a.b'));