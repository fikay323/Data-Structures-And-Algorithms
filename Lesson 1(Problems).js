// reverse a string
const reverse = word => word.split('').reverse().join('');
console.log(reverse('students'));

// palindrome checker
const isPalindrome = word => word === reverse((word));
console.log(isPalindrome('apple'));
console.log(isPalindrome('mum'));

// int reverser
const intReverser = integer => Number(reverse(integer + ''));
console.log(intReverser(1234));

// capitalizer
const capitalize = sentence => {
    return sentence.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize('joHN sarAh'));

// fizzbuzz
const fizzBuzz = number => {
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) { console.log('fizzbuzz') }
        else if (i % 5 === 0) { console.log('buzz') }
        else if (i % 3 === 0) { console.log('fizz') }
    }
}

// array chunks
const chunk = (array, chunkSize) => {
    if(array.length <= chunkSize) {
        return array;
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % chunkSize === 0) {
            newArray.push(array.slice(i, i + chunkSize));
        }
    }
    return newArray;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunk(['arr'], 5));
