var array1 = [1,3,6,2,4];
var array2 = [2,0,4,1,2]
var array3 = [];

// Question : Add the two arrays into array3, (sum) and remove the repeating values from resulting array.

var sum = array1.map(function(num,idx){
    return num + array2[idx];
})

// var sum = array1.map((a,i) => a + array2[i])
// console.log(sum);

const s = new Set(sum);
// console.log(result);

s.forEach( x => array3.push(x));

console.log(array3);