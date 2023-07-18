Array.prototype.customMap = function(callback) {
    let newArray = []

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        const newElement = callback(element, i, this)

        newArray.push(newElement)
    }

    return newArray
}

// Тесты =>
const test = [1, 2, 3]
const testMapped = test.customMap((el) => el * 2)

console.log(testMapped);