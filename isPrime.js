
function getClosestPrime(an_integer){
    if(isPrime(an_integer))
        return an_integer;
    
    let i = 0;
    do{
        
    }
}

function isPrime(toCheck){

    for(i = 2; i < toCheck;i++){
        if(toCheck % i  == 0 )
            return false;
    }
    return true;
}