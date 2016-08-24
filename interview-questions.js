
   /* The share price for a company over a week's trading is as follows:
   [128, 97, 121, 123, 98, 96, 105]. If you had to buy shares in the company on
   one day, and sell the shares on one of the following days, write an algorithm
   to work out what the maximum profit you could make would be. */

/*

 */

function sharePrice(array, shares, difference) {
  let lowest;
  let highest;
  difference = difference || 0;
  if (!array.length) {
    return `You made $${difference * shares}`;
  }
  if (array[0] > array[1]) {
    return sharePrice(array.slice(1, array.length), shares, difference)
  } else {
    lowest = array[0];

    let sortArr = array.slice();
    sortArr.sort(function(a, b){return a - b}).slice();
    highest = sortArr[sortArr.length - 1];

    let oldDiff = difference;
    difference = highest - lowest;

    if (difference > oldDiff) {
      return sharePrice(array.slice(1, array.length), shares, difference);
    } else {
      return sharePrice(array.slice(1, array.length), shares, oldDiff);
    }
  }
}

console.log(sharePrice([128, 97, 121, 123, 98, 20, 195], 10));

   /* Imagine that you wanted to find what the highest floor of a 100 story
   building you could drop an egg was, without the egg breaking. But you only
   have two eggs. Write an algorithm to work out which floors you should drop
   the eggs from to find this out in the most efficient way. */

   /* Imagine you are looking for a book in a library with a Dewey Decimal index.
   How would you go about it? Can you express this process as a searching algorithm? */
