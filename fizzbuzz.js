// The classic Fizzbuzz
const print = (num, word) => {
    console.log(num + " " + word)
}



const fizzbuzz = () => {
    for (let i = 0; i <= 100; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            print(i,'fizzbuzz');
        } else if (i % 3 === 0) {
            print(i, 'fizz')
        } else if (i % 5 === 0) {
            print(i, 'buzz')
        }
    }
}

fizzbuzz()