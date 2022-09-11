'use strict'

const fs = require('fs');

const readInput = function (fileName, callback) {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return callback(err);
        }

        callback(null, data);
    });
};

const writeOutput = function (fileName, data, callback) {
    fs.writeFile(fileName, data, { encoding: 'utf-8' }, err => {
        if (err) {
            return callback(err);
        }

        callback(null);
    })
};

const copy = function (source, target, callback) {
    readInput(source, (err, data) => {
        if (err) {
            return callback(err);
        }
        // This has to be here because data is only available inside the readInput function
        writeOutput(target, data, err => {
            if (err) {
                return callback(err);
            }

            callback(null);
        })
    })
};

copy('input.txt', 'output.txt', err => {
    if (err) {
        return console.log('Failed to copy.');
    }

    console.log('Copied successfully!');
});