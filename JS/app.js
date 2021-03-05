'use strict';
// create separate JS object literals for each shop
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/*random number integer*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const seattle = {
    /* nameLocation , minHourlyCustomers ,maxhourlycustomers and averageCookiespercustomer from lab  */
    nameLocation: 'Seattle',
    minHourlyCustomers: 23,
    maxhourlycustomers: 65,
    averageCookiespercustomer: 6.3,
    totalCookies: 0,
    // this array for put random number of customer 
    // push the random number for customerHourly
    customerHourly: [],

    calculateCustomerHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            seattle.customerHourly.push((randomNumber(seattle.minHourlyCustomers, seattle.maxhourlycustomers)));
        }
    },
    // now  we need the same array but for cookies not customer , lab required 
    cookiesHourly: [],
    calculateCookiesHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            //Math.floor for get number without any number after . 
            this.cookiesHourly.push(Math.floor(this.customerHourly[i] * this.averageCookiespercustomer));
            this.totalCookies += this.cookiesHourly[i];
        }
    },
    //finish fist object , now I want to show it in the browser , order list
    rander: function() {
        let parent = document.getElementById('parentContainer');
        // console.log(parent);
        let storeName = document.createElement('h3');
        parent.appendChild(storeName);
        storeName.textContent = this.nameLocation;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `number of cookies in hour from ${hours[i]} is  ${this.cookiesHourly[i]}`;
        }
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `total number of cookies in the day  ${this.totalCookies}`;
    }
}
seattle.calculateCustomerHourly();
seattle.calculateCookiesHourly();
seattle.rander();
/*second store -------------------------------------------------------------------------------------------*/
const tokyo = {
    /* nameLocation , minHourlyCustomers ,maxhourlycustomers and averageCookiespercustomer from lab  */
    nameLocation: 'Tokyo',
    minHourlyCustomers: 3,
    maxhourlycustomers: 24,
    averageCookiespercustomer: 1.2,
    totalCookies: 0,
    // this array for put random number of customer 
    // push the random number for customerHourly
    customerHourly: [],

    calculateCustomerHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            tokyo.customerHourly.push((randomNumber(tokyo.minHourlyCustomers, tokyo.maxhourlycustomers)));
        }
    },
    // now  we need the same array but for cookies not customer , lab required 
    cookiesHourly: [],
    calculateCookiesHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            //Math.floor for get number without any number after . 
            this.cookiesHourly.push(Math.floor(this.customerHourly[i] * this.averageCookiespercustomer));
            this.totalCookies += this.cookiesHourly[i];
        }
    },
    //finish fist object , now I want to show it in the browser , order list
    rander: function() {
        let parent = document.getElementById('parentContainer');
        // console.log(parent);
        let storeName = document.createElement('h3');
        parent.appendChild(storeName);
        storeName.textContent = this.nameLocation;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `number of cookies in hour from ${hours[i]} is  ${this.cookiesHourly[i]}`;
        }
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `total number of cookies in the day  ${this.totalCookies}`;
    }
}
tokyo.calculateCustomerHourly();
tokyo.calculateCookiesHourly();
tokyo.rander();
/* ----------------Dubai--------------------------------------------*/
const dubai = {
    /* nameLocation , minHourlyCustomers ,maxhourlycustomers and averageCookiespercustomer from lab  */
    nameLocation: 'dubai',
    minHourlyCustomers: 3,
    maxhourlycustomers: 24,
    averageCookiespercustomer: 1.2,
    totalCookies: 0,
    // this array for put random number of customer 
    // push the random number for customerHourly
    customerHourly: [],

    calculateCustomerHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            dubai.customerHourly.push((randomNumber(dubai.minHourlyCustomers, dubai.maxhourlycustomers)));
        }
    },
    // now  we need the same array but for cookies not customer , lab required 
    cookiesHourly: [],
    calculateCookiesHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            //Math.floor for get number without any number after . 
            this.cookiesHourly.push(Math.floor(this.customerHourly[i] * this.averageCookiespercustomer));
            this.totalCookies += this.cookiesHourly[i];
        }
    },
    //finish fist object , now I want to show it in the browser , order list
    rander: function() {
        let parent = document.getElementById('parentContainer');
        // console.log(parent);
        let storeName = document.createElement('h3');
        parent.appendChild(storeName);
        storeName.textContent = this.nameLocation;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `number of cookies in hour from ${hours[i]} is  ${this.cookiesHourly[i]}`;
        }
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `total number of cookies in the day  ${this.totalCookies}`;
    }
}
dubai.calculateCustomerHourly();
dubai.calculateCookiesHourly();
dubai.rander();
/* ----------------Paris--------------------------------------------*/
const paris = {
    /* nameLocation , minHourlyCustomers ,maxhourlycustomers and averageCookiespercustomer from lab  */
    nameLocation: 'paris',
    minHourlyCustomers: 3,
    maxhourlycustomers: 24,
    averageCookiespercustomer: 1.2,
    totalCookies: 0,
    // this array for put random number of customer 
    // push the random number for customerHourly
    customerHourly: [],

    calculateCustomerHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            paris.customerHourly.push((randomNumber(paris.minHourlyCustomers, paris.maxhourlycustomers)));
        }
    },
    // now  we need the same array but for cookies not customer , lab required 
    cookiesHourly: [],
    calculateCookiesHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            //Math.floor for get number without any number after . 
            this.cookiesHourly.push(Math.floor(this.customerHourly[i] * this.averageCookiespercustomer));
            this.totalCookies += this.cookiesHourly[i];
        }
    },
    //finish fist object , now I want to show it in the browser , order list
    rander: function() {
        let parent = document.getElementById('parentContainer');
        // console.log(parent);
        let storeName = document.createElement('h3');
        parent.appendChild(storeName);
        storeName.textContent = this.nameLocation;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `number of cookies in hour from ${hours[i]} is  ${this.cookiesHourly[i]}`;
        }
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `total number of cookies in the day  ${this.totalCookies}`;
    }
}
paris.calculateCustomerHourly();
paris.calculateCookiesHourly();
paris.rander();
/* ----------------Lima--------------------------------------------*/
const lima = {
    /* nameLocation , minHourlyCustomers ,maxhourlycustomers and averageCookiespercustomer from lab  */
    nameLocation: 'lima',
    minHourlyCustomers: 3,
    maxhourlycustomers: 24,
    averageCookiespercustomer: 1.2,
    totalCookies: 0,
    // this array for put random number of customer 
    // push the random number for customerHourly
    customerHourly: [],

    calculateCustomerHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            lima.customerHourly.push((randomNumber(lima.minHourlyCustomers, lima.maxhourlycustomers)));
        }
    },
    // now  we need the same array but for cookies not customer , lab required 
    cookiesHourly: [],
    calculateCookiesHourly: function() {
        for (let i = 0; i < hours.length; i++) {
            //Math.floor for get number without any number after . 
            this.cookiesHourly.push(Math.floor(this.customerHourly[i] * this.averageCookiespercustomer));
            this.totalCookies += this.cookiesHourly[i];
        }
    },
    //finish fist object , now I want to show it in the browser , order list
    rander: function() {
        let parent = document.getElementById('parentContainer');
        // console.log(parent);
        let storeName = document.createElement('h3');
        parent.appendChild(storeName);
        storeName.textContent = this.nameLocation;
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `number of cookies in hour from ${hours[i]} is  ${this.cookiesHourly[i]}`;
        }
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `total number of cookies in the day  ${this.totalCookies}`;
    }
}
lima.calculateCustomerHourly();
lima.calculateCookiesHourly();
lima.rander();
/*lab 06 */