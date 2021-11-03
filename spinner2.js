const animateSpinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
let delay = 100;

for (const element of animateSpinner) {
    
    setTimeout(() => {
        process.stdout.write(element);
    }, delay)

    delay += 200;

}