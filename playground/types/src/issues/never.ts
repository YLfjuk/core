const numbers: number[] = [];
const num: number | string = 3;

// if (Math.random() > 0.5) {
//     num = '';
// }

if (typeof num !== 'number') {
    num;
    //^?

    numbers.push(num);
}
