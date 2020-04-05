/*
Promise系の処理をもっと簡単にかけるとのこと。
非同期処理を同期処理に変えるようなものっぽい
*/

// 中で await を使っているため、 async を定義つけた関数にする
async function asyncFunc(value) {
    const count = await new Promise((resolve) => {
        resolve(10);
    });   
    return count * value; 
}

async function sumAsyncFunc() {
    let count = 0;
    count += await asyncFunc(3);
    count += await asyncFunc(4);
    count += await asyncFunc(5);
    count += await asyncFunc(6);
    return count;
}

sumAsyncFunc().then(result => {
    console.log(result);
});
