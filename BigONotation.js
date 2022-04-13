/**
 * What is Good Code?
 *
 * 1. Readable
 * 2. Scalable
 */

function sumOfAll_one(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function sumOfAll_two(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
console.log(sumOfAll_two(5000));
let time2 = performance.now();
console.log("Second Function", (time2 - time1) / 1000);

let time3 = performance.now();
console.log(sumOfAll_one(5000));
let time4 = performance.now();
console.log("first Function", (time4 - time3) / 1000);

/**Function one take more time then function two */
