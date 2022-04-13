function multipleArray(n) {
  for (let i = 0; i <= n; i++) {
    // n
    for (let j = 0; j <= n; j++) {
      // n
      console.log(i, j);
    }
  }
}

multipleArray(2);

// n*n = n^2
// O(n^2)

// Constent Don't Matter
// O(2n) => O(n)
// O(100) => O(1)
// O(19n^2) => O(n^2)

// Smaller Terms Don't matter
// O(n+10) => O(n)
// O(100n + 50) => O(n)
// O(n^2 + 5n + 8) => O(n^2)

function min5Log(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
min5Log(100); // O(n)

// Loop depand on the value n

function max5Log(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
max5Log(100); // O(1)
// unless n is less then 5 it always run a constent number of time.

/*
Amazing => O(log n), O(1)
Fair => O(n) 
BAD => O(n log n)
Terrible => O(n^2), O(2^n), O(n!)
*/
