
/* 
SetTimeout es un metodo para generar tiempo pero solo se puede 
usar en asincronia con callbacks y promises. para pador usarlo 
con async await se debe convertir con la funcion util.
*/ 

//import { promisify } from 'util';     // Module
const util = require('util');           // Require
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne() {
        try {
            //throw new Error('Some problem');
            await sleep(4000);
            return 'ONE VALUE';
        } catch (error) {
            console.log(error);
        }

        
    },

    async taskTwo() {
        try {
            //throw new Error('Some problem');
            await sleep(2000);
            return 'TWO VALUE';
        } catch (error) {
            console.log(error);
        }
        
    }

}