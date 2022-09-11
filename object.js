'use strict'

const company = {
    name: "The native Web",
    location: "Germany",
    year: "2012",
    fullname () {
        return `${this.name} GmbH`;
    }
};

// console.log (company.name);

const propertyName = `name`;

console.log (company[propertyName]);