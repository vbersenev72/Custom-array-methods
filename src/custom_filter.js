Array.prototype.customFilter = function(callback) {
    let newArray = []

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const result = callback(element, i, this)

        if (result) {
            newArray.push(element)
        }
    }

    return newArray
}

// Тесты =>
const test = [1, 2, 3, 4]
const filteredTest = test.customFilter((el) => el % 2 == 0)
console.log(filteredTest);