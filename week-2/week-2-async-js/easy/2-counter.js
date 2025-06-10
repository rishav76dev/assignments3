let counter = 0;

function counterup() {
    counter++;
    console.log(counter);
    setTimeout(counterup, 1000);
}

counterup();