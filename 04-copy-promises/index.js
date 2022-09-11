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

const copy = function (source, target) {
    return new Promise((resolve, reject) => {
        readInput(source).
            then(data => writeOutput(target, data)).
            then(() => resolve()). 
            catch(err => reject(err));
        });
}; 

copy('input.txt', 'output.txt').
    then(() => console.log('Copied successfully!')).
    catch(() => console.log('Failed to copy.'));