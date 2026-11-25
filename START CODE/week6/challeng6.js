function CountVotesAndDeclareAWinner(vote){
    let countA=0;
    let countB=0;
    let countC=0;
    if(vote.length==0){
        return "Thera is not vote yet";
    }

    
    for(let i=0;i<vote.length;i++){
        if(vote[i]=='A'){
            countA++;
        }else if(vote[i]=='B'){
            countB++;
        }else if(vote[i]=='C'){
            countC++;
        }
    }
    if((countA>countB)&&(countA>countB)){
        return "A is the winner";
    }else if((countB>countA)&&(countB>countC)){
        return "B is the winner";
    }else if((countC>countB)&&(countC>countA)){
        return "C is the winner";
    }else if(countA==countB){
        return "Bothe A and B are the winner";
    }else if(countA==countc){
        return "Both A and C are the winner";
    }else if(countB==countC){
        return "Both B and C are the winner";
    }

}
let vote1=['A','B','A','C','A'];
console.log(CountVotesAndDeclareAWinner(vote1));
let vote2=['A','B','B','C','A'];
console.log(CountVotesAndDeclareAWinner(vote2));
let vote3=[];
console.log(CountVotesAndDeclareAWinner(vote3));

