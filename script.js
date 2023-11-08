
const number_container = document.getElementById('number-container');

function isPrime( num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    } return num > 1;
}

for (let i = 0; i <= 100; i++) {
    let numbers = document.createElement('div');
    numbers.className = 'number';
    numbers.innerText = i;
    if (i % 2 === 0) {
        numbers.classList.add("even");
        numbers.addEventListener("mouseover", function(){ 
        numbers.innerText = "Even"
        });
    } else {
        numbers.classList.add("odd");
        numbers.addEventListener("mouseover", function(){ 
        numbers.innerText = "Odd"
        });

    } if(isPrime(i)){
        numbers.classList.add("prime");
        numbers.addEventListener("mouseover", function(){ 
        numbers.innerText = "Prime"
        });

    }
    number_container.appendChild(numbers);
    } 
