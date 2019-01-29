function maxOfTwoNumbers(num1,num2) {
    if (num1 >num2) {
        return num1
    } else if (num1 <num2) {
        return num2
    } else {
        console.log ("The numbers are equal!!")
    }
}



function findLongestWord(arr) {
    arr.sort(function(a,b) {
        return b.length-a.length;
    })
    return (arr[0],arr[1])
}



function sumArr(arr){
    return arr.reduce(function (a,b){
        return a+b
    })

}


function averageNumber(arr){
   return sumArr(arr)/(arr.length)
}

var words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

function averageWordLength (arr) {
    var sum=0
   for (var i=0;i<arr.length;i++){
       sum+=arr[i].length;
   }
    return sum/ arr.length;
}



function uniquifyArray(arr) {
        var uniqueItems = Array.from(new Set(arr));
        return uniqueItems;    
}




function doesWordExist(arr, value) {
    for (var i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
        return false;
    
    }
}



function howManyTimes (arr, value){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]===value){
            count++
        }
    }
    return count
}