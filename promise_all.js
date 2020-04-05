const promise1 = new Promise( function( resolve, reject ) {
	setTimeout( function () {
		resolve( 3 );
	},3000 );
});

// Promise関数 (2)
const promise2 = new Promise( function( resolve, reject ) {
	setTimeout( function () {
		resolve( 1 );
	},1000 );
} ) ;

// Promise関数 (3)
const promise3 = new Promise( function( resolve, reject ) {
	setTimeout( function () {
		resolve( 2 ) ;
	},2000 );
});

// promise1, promise2, promise3 が終わってから then が動き出す。
Promise.all( [ promise1, promise2, promise3 ] )
.then( ( numArray ) => {
    console.log( numArray );

    const count = numArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    });
    return count;
}).then((value) => {
    console.log({value});
});