let arr = ['Beslan','Yahya', 'Mansur','Adam','Movsar','Abdurahman','Ruslan','Alvi','Rasulmi','Ibarhim']
let accumulator = []
for(i=0;i<arr.length;i++){
    if(arr[i][0]==='A'){accumulator.push(arr[i])}
}
console.log(accumulator)