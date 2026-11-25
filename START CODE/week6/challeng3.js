function aver(arr){
    let sum=0;
    let count=0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        count++;
        


    }
    if(count==0){
        return 0;
    }else{
        return sum/count;
    }

}

let arr1=[85,90,78,92];
console.log(aver(arr1));
let arr2=[10,20,30];
console.log(aver(arr2));
let arr3=[];
console.log(aver(arr3));