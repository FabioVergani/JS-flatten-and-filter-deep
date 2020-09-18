//test:
const data1 = [
  void 0,
  null,
  0,
  false,
  -1,
  [],
  '',
  2444
]

const data2 = [
  1, 2, 3,
  [
    5, 6, 7, 8,
    [
      'a', 'b', 'c', ''
    ]
  ]
];

const data3 = [
  {},
  { length: -1 },
  { length: 0 },
  { length: 1 }
];


console.clear();

// falsy arg return empty array:
for (const e of data1) {
  console.log(flatten(e));
}


//console.log(flatten(data1));
//console.log( flatten(data1,e=>e===0||e));
console.log( flatten(data1,e=>e===2444));
//[undefined, null, 0, false, -1, Array(0), ""]
console.log(flatten([data1, [data1, [data1, [data1]]]]));


console.log(flatten(data3));
console.log(flatten([data3]));
//both: [{…}, {…}, {…}, {…}]

console.log(flatten([1, data3]));
console.log(flatten([[1], data3]));
//both: [1, {…}, {…}, {…}, {…}]

console.log(flatten([[1, data2], data3]));
//[1, 1, 2, 3, 5, 6, 7, 8, "a", "b", "c", "", {…}, {…}, {…}, {…}]




/*
console.log(flatten(3)); // '',null,undefined,false -> []

console.log(arr1); // [1, 2, 3, Array(5)]
console.log(flatten(arr1)); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
console.dir(arr1); // conservative!
*/