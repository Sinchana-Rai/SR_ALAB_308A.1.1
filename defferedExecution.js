const displayElement = document.getElementById("container")
h2 = document.createElement("h2")
displayElement.appendChild(h2);
displayElement.style.fontSize="70px"
displayElement.style.color = "blue"
displayElement.style.textAlign ="center"


const theNumber = 1000  ; 
function isPrime(num) {
  if (num <= 1) {  
     return false;
  }
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) {
        return false;
     }
  }
  return true;
}


function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
     if (isPrime(i)) {
        sum += i;
     }
  }
  alert('Calculation Done ');
  displayElement.innerHTML += sum;
  return sum;  
}


const sum = sumOfPrimes(theNumber);

