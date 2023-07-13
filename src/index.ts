export function max(number: number[]): number {
  if (!number.length) throw Error("Error");
  let currMax = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > currMax) {
      currMax = number[i];
    }
  }
  return currMax;
}

export function min(number: number[]): number {
  if (!number.length) throw Error("Error");
  let currMin = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] < currMin) {
      currMin = number[i];
    }
  }
  return currMin;
}

export function avg(number: number[]): number {
  if (!number.length) throw Error("Error");
  let avg = number[0];
  for (let i = 1; i < number.length; i++) {
    avg = number[i] + avg;
  }
  return avg / number.length;
}

console.log(avg([1, 2, 3, 4, 8]));
