// Learn to categorise a number as positive, negative or zero using conditional statements in Javascript
function categoriseNumber(myNumber){
    let thisNumber=myNumber;
    if (thisNumber>0){
        console.log("The number is positive");
    }
    else {
        if (thisNumber<0){
            console.log("The number is negative");
        }
        else{
            console.log("The number is zero");
        }
    }
}

categoriseNumber(0);
categoriseNumber(-10);
categoriseNumber(100);