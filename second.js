var fruitsDb = ["apple", "banana", "orange", "pineapple", "grapes", "avocado", "strawberry"];

var mixFruitArr= ["grapes","cabbage", "apple","tomato", "orange","potato","pineapple"];

var fruits = [];
mixFruitArr.map((value,index) =>{

    fruitsDb.map((value1,index1) => {
        if(value === value1){
            fruits.push(value);
        }
    })
})
console.log(fruits);

