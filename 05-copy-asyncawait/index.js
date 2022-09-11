'use strict'

const fs = require('fs');

const readInput = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject(err);        
            }

            resolve(data);
        });
    });
};

const writeOutput = function (fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, { encoding: 'utf8' }, err => {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
};

const copy = async function (source, target) {
    try {
        const data = await readInput(source);
        await writeOutput(target, data);
    } catch (ex) {
        throw ex;   
    }
};

(async () => {
    try {
        await copy('input.txt', 'output.txt');
        console.log('Copied successfully!');
    } catch (ex) {
        console.log('Failed to copy.');
    }
})();