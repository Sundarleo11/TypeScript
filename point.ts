export class Point {
    // private x: number;
    // y: number;

    constructor(private x: number, private y: number) { }

    public draw() {
        //...

        console.log(this.x + ' ' + this.y);
    }

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error("It's not zero");

        this.x = value;

    }

}
