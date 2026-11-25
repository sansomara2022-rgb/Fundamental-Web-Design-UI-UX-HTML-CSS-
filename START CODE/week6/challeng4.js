function countCharater(text,char){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i]==char){
            count++;
        }

    }
    return count;

}

let text1="hello word";
console.log(countCharater(text1,'o'));
let text2="aaa bb a";
console.log(countCharater(text2,'a'));
let text3="abc";
console.log(countCharater(text3,'d'));