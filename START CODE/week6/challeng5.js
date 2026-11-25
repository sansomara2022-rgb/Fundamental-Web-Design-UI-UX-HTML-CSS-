
function CountTheNumberOfWordsInASentence(sentence){
    let count=0;
    if(sentence.length>0){
        count++;
        for(let i=0;i<sentence.length;i++){
            if(sentence[i]==' '){
                count++;
            }
        }
        return count;
    }else{
        return "No sentence";
    }
    

}

let sentence1="hello world";
console.log(CountTheNumberOfWordsInASentence(sentence1));
let sentence2="this is the best day";
console.log(CountTheNumberOfWordsInASentence(sentence2));
let sentence3="a bb ccc ddddddd e";
console.log(CountTheNumberOfWordsInASentence(sentence3));