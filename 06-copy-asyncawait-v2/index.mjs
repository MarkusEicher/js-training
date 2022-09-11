// 'use strict'
import fs from "fs/promises";
//import util from 'util';

/* const readInput = util.promisify(fs.readFile);
const writeOutput = util.promisify(fs.writeFile);
 */
// const fs = import('fs');

const copy = async function (source, target) {
    try {
        // const data = await readInput(source);
        const data = await fs.readFile(source, { encoding: 'utf-8' });
        await fs.writeFile(target, data, { encoding: 'utf-8' });
    } catch (ex) {
        throw ex;   
    }
};

    try {
        await copy('input.txt', 'output.txt');
        console.log('Copied successfully!');
    } catch (ex) {
        console.log('Failed to copy.');
    };