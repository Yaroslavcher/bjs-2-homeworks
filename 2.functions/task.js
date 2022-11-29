"use strict";
// Задание 1
/*function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  
  let avg = sum / arr.length;
  return {
    min: min,
    max: max,
    avg: +avg.toFixed(2)
  };
}*/

// Задание 1 - подход 2
function getArrayParams(...arr) {
  if (arr.length == 0) { return 0; }
  let summa = (sum, elem) => sum + elem;
  let avg = arr.reduce(summa) / arr.length;
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: +avg.toFixed(2)
  };
}

// Задание 2
function summElementsWorker(...arr) {
  if (arr.length == 0) { return 0; }
  let summa = (sum, elem) => sum + elem;
  return arr.reduce(summa);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) { return 0; }
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) { return 0; }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else { sumOddElement += arr[i]; }
  }
  return sumEvenElement - sumOddElement;  
}  

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) { return 0; }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}
// Задание 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }   
  }
  return maxWorkerResult;
}