## indian-currency-converter
#### Author: Chandrakant Thakkar
##### Created on: 28th Oct 2016

---
###### This is a javascript function to convert Number into indian currency format and 'Thausand-Lakhs' format.

- To use just download indianCurrency.js file, import  this file into your project and use following functions.

---
#### Function

 * _convertToINR :_ This function convert number to indian currency format.It takes two parameters number and boolean flag for currency symbol.

   Syntax: convertToINR(number,isSymbolRequired)

 - _Example_
 ```javascript  
 var number = 1000000;  
 convertToINR(number,true);
 //return ₹10,00,000.00
 convertToINR(number,false);
 //return 10,00,000
 ```

 * _thausandFormatConverter :_ This function convert number to 'Thausands-Lakhs' format.It takes number as argument.

   Syntax: thausandFormatConverter(number)

 - _Example_
 ```javascript  
 thausandFormatConverter(100);
 //return "1 Hundred"
 thausandFormatConverter(1000);
 //return "1 Thausand"
 thausandFormatConverter(10000);
 //return "10 Thausands"
 thausandFormatConverter(100000);
 //return "1 Lakh"
 thausandFormatConverter(1000000);
 //return "10 Lakhs"
 thausandFormatConverter(10000000);
 //return "1 Crore"
 ```
