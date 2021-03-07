// The classic Fizzbuzz

const min = 1, max = 100;

const fizzbuzz = (min, max) => {
    for ( let i = min; i <= max; i++) {
        let divisibleBy3 = divisibleBy(i, 3);
        let divisibleBy5 = divisibleBy(i, 5);

        if (divisibleBy5 && divisibleBy3) {
            console.log(i + " fizzbuzz")
        } else if (divisibleBy3) {
            console.log(i + " fizz")
        } else if (divisibleBy3) {
            console.log(i + " buzz")
        } else {
            console.log(i)
        }
    }
}


const divisibleBy = (num, base) =>{
    return num % base === 0;

}

fizzbuzz(min, max)