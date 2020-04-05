// 参考: https://qiita.com/tonkotsuboy_com/items/07f8ef98abf89250b90c
const array = [1,2,3,4,5];
console.log({array});

// filter 配列にフィルターをかけ、間引きした配列を作成する
const filterArray = array.filter((element, index, array) => {
    return (element % 2 == 0);
});
console.log({filterArray});

// map 配列それぞれになんらかの処理をして配列に収め直す
const mapArray = array.map((element, index, array) => {
    return element * element;
});
console.log({mapArray});

// reduce 前の値を引き継ぎながら次の値との計算を繰り返す
const reduceResult = array.reduce((previousValue, currentValue, index, array) => {
    return previousValue + currentValue;
});
console.log({reduceResult});

// every 条件を全ての値が満たす場合、true
const everyResult = array.every((element, index, array) => {
    return (element < 5);
});
const everyResult2 = array.every((element, index, array) => {
    return (element <= 5);
});
console.log({everyResult, everyResult2});

// some 条件をひとつでも値が満たす場合、true
const someResult = array.some((element, index, array) => {
    return (element == 5);
});
console.log({someResult});

// flat
const flatResult = [[1, 2], 3, 4].flat();
console.log({flatResult});

// チェーンしてみる map * filter
var result = [1,2,3,4,5,6].map((element) => {
    return element * 2
}).filter((element) => {
    return element % 3 == 0
});
console.log("チェーン: " + result);

// fromEntries
console.log(Object.fromEntries([["id", 16], ["name", "鈴木"]]));

// trim
console.log("  Hello World　　　".trim());