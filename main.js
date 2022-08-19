// Tamirn 1
const numArray = [15, 8, 20, 74, 0, 10, 5, 45];
const numArray2 = [10, 15, 78, 10, 0, null, 6, 0];
const trueValue = (array) => {
  array.forEach((element) => {
    if (element !== 0 && element !== null && element !== undefined)
      console.log(element);
  });
};

trueValue(numArray);
trueValue(numArray2);

// Tamein 2

let numbers = {
  a: 1,
  b: 2,
};

const toArray = function (obj) {
  const newArr = Object.entries(obj);
  console.log(newArr);
};

toArray(numbers);

// Tamrin 3
const array1 = [1, 0, 2];
const array2 = [4, 5, 8, 10, 5];

const sumArr = function (arr1, arr2) {
  let result = [];
  let counter = 0;
  let sum = 0;

  if (arr1.length === 0) {
    return "Arr one is Empty";
  }
  if (arr2.length === 0) {
    return "Arr Two is Empty";
  }

  while (counter < arr1.length && counter < arr2.length) {
    result.push(arr1[counter] + arr2[counter]);
    counter++;
  }

  if (counter === arr1.length) {
    for (sum = counter; sum < arr2.length; sum++) {
      result.push(arr2[sum]);
    }
  } else {
    for (sum = counter; sum < arr1.length; sum++) {
      result.push(arr1[sum]);
    }
  }
  return result;
};

console.log(sumArr(array1, array2));

// Tamrin 4

const subsetString = (str) => {
  let subset = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      subset.push(str.slice(i, j));
    }
  }
  return subset;
};

console.log(subsetString("ali"));

// Tamrin 5
const number = 311584721;
const str = number.toString();
const numResult = [str[0]];

for (let i = 1; i < str.length; i++) {
  if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
    numResult.push("-", str[i]);
  } else {
    numResult.push(str[i]);
  }
}

console.log(numResult.join(""));

//Tamein 6
const nestedObject = {
  date: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            majicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const numberObj = Object.values(nestedObject);
console.log(numberObj);
