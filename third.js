var empList = [
    {
        name:"jhon Doe",
        dept: "php",
        empId:5
    },
    {
        name:"Paul Smith",
        dept: "Mern",
        empId: 4
    },
    {
        name:"Tom Smith",
        dept: "SEO",
        empId:7
    }
];


// WITH LOOP:------------------------------
const len = empList.length
for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){

        if(empList[i].empId>empList[j].empId){
            let temp = empList[i];
            empList[i] = empList[j];
            empList[j] = temp;
        }
    }
}

console.log(empList);




// WITH SORT METHOD:---------------------------------
const sortedbyEmpId = empList.sort(function(a,b){

        return a.empId-b.empId;
});

console.log(sortedbyEmpId);