function challeng1(width,height) {
    let rectangleString='';
    for(let i=width;i>0;i--){
        for(let j=height;j>0;j--){
           rectangleString +="*";
        }
        rectangleString +="\n";

            
    }
    return rectangleString;
    
    
}

console.log(challeng1(3,4))
console.log(challeng1(5,2));
console.log(challeng1(5,-2))