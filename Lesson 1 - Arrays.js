class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index) {
        const indexedItem = this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        --this.length;
        return indexedItem;
    }
}

const myArray = (new MyArray()).push('hello');
myArray.push('bobo').push('bobo2').push('bobo3').push('bobo4');
console.log(myArray);
console.log(myArray.delete(3));
console.log(myArray);
