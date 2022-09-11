import fs from "fs/promises";

const copy = async function (source, target) {
        const data = await fs.readFile(source, { encoding: 'utf-8' });
        await fs.writeFile(target, data, { encoding: 'utf-8' });
};

    try {
        await copy('input.txt', 'output.txt');
        console.log('Copied successfully!');
    } catch (ex) {
        console.log('Failed to copy.');
    };