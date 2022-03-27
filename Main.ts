
// function Message(m) {
//     console.log(m)
// }

// let m = "hello world";

// Message(m);

//datatype
//========
//let a: number;
// let b: boolean;
// let c: String;
// let d: any;
// let e: number[] = [1, 2, 3, 4];
// let f: any[] = [1, "hello", true];

// const colorred = 1;
// const colorblue = 2;
// const colorgreen = 3;

// enum Color { red, blue, green };
// let backgroundColor = color.blue;


//assertion
/*
let message = "abc";

let EndsWithC = message.endsWith('c');

let method1 = (<string>message).endsWith('c');
let method2 = (message as string).endsWith('c');

//arrow function

let log = function log(m2) {
    console.log("demo1");
}

//function log1(m3)=> console.log("demo2");

log = (demo1) => console.log("demo2");


log("string");

// interface

interface Point {
    x: number,
    y: number

    //core logic implimentation
}

let dreawpoint = (point: Point) => {
    ///...algo
}

//custom logic
dreawpoint({
    x: 1,
    y: 2
})

*/

//calsses
/* class point {
    x: number;
    y: number;

    draw() {
        //...

        console.log(this.x + ' ' + this.y);
    }

    getdistance(another: point) {
        //...
    }
}
let p = new point();
p.x = 4;
p.y = 5;
p.draw(); */


// constructor



import { Point } from './point';

let p = new Point(2, 3);

let x = p.X;
p.X = 10;
// p.x = 4;
// p.y = 5;
p.draw();
