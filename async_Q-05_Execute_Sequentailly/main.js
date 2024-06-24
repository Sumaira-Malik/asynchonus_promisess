"use strict";
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data Fetched");
            resolve("Fetched Data");
        }, 1000);
    });
}
;
function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data Process");
            resolve("Process Data");
        }, 1500);
    });
}
;
function executeSequentially() {
    fetchData().then((data) => {
        console.log(data);
    });
    processData().then((data) => {
        console.log(data);
    });
}
executeSequentially();
