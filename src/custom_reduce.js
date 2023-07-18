Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    
      return accumulator;
}

// Тесты =>
const array = [1, 2, 3, 4, 5];
const sum = array.customReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Выведет: 15
