

function ReverseArray(arr){
    let arr0=[]
    for(let i=arr.length-1;i>=0;i--){
        arr0.push(arr[i]);
        // console.log(arr.length)

    }
    return arr0;

}
let arr=[14,16,18,20];
console.log(ReverseArray(arr))
let arr1=[10,30,50];
console.log(ReverseArray(arr1));
console.log(ReverseArray([]));
