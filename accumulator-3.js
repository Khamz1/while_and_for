let arr = ['js','java', 'python','c++','c#','php','rubin','sql','swift','rust']
let accumulator = []
for(i=0;i<arr.length;i++){
    if(arr[i].length>3){accumulator.push(arr[i])}
}
console.log(accumulator)