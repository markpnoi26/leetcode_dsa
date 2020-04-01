/**
 * initialize your data structure here.
 */

 /** 
 * @param {number} x
 * @return {void}
 */


class MinStack {
    constructor() {
        this.stack = [],
        this.min = Infinity
    }

    push(x) {
        this.stack.push(x)
        if (x < this.min) {
            console.log("new min!!")
            this.min = x
        }
    }

    pop() {
        const popped = this.stack.pop()
        if (popped === this.min) {
            this.min = Math.min(...this.stack)
        }
        if (this.stack.length === 0) {
            this.min = Infinity
        }
    }

    top() {
        const topNum = this.stack[this.stack.length-1]
        return topNum
    }

    getMin() {
        return this.min
    }
};


let minStack = new MinStack()
console.log(minStack)
minStack.push(5)
minStack.push(4)
minStack.push(10)
console.log(minStack.top())