'use strict';

console.log("Start");

setTimeout (() => {
    console.log ("Hallo Welt");
}, 10);

console.log("Ende");

for (let i = 0; i < 5_000_000_000; i++) {
    //intentionally do nothing - Event Loop
}