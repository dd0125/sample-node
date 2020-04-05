// 参考: https://qiita.com/toshihirock/items/e49b66f8685a8510bd76

// 標準の Promise の例
new Promise((resolve) => {
    // resolve(2);
    setTimeout(() => resolve(2), 2000);
}).then((value) => {
    return value * value;
}).then((value) => {
    return value * value;
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log('Display Error', error);
});