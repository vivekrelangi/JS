let data = {
    "customers": [
        { "firstName": "Bob", "lastName": "Morry" },
        { "firstName": "Albert", "lastName": "Smith" },
        { "firstName": "Kate", "lastName": "Ward" }
    ]
};
//Where data is the JSON object and  
//customers is the array name 
console.log(data)

JavaScript_Object= { firstName: "Sam", lastName: "Fernandes" } 
//key need not be enclosed within quotes for JavaScript Objects 
JSON_Object= { "firstName": "Sam", "lastName": "Fernandes" } 
//key must be enclosed within quotes for JSON Objects 
console.log(JavaScript_Object,JSON_Object)

let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}' 
let obj = JSON.parse(stringJSON); 
console.log(obj); 
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 

let dataJSON = { firstName: "Sam", lastName: "Fernandes" }; 
let dobj = JSON.stringify(dataJSON); 
console.log(dobj); 
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 
