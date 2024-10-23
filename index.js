// Ray Castillo helped with this program in the breakout room

function checkCounter(counter){
try{
checkCounter(counter+1)
}
catch(error){
    console.log(error);
    console.log(counter)

}

}
checkCounter(1000);


