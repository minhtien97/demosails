/**
 * Students.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string',columnName :'name' ,required : true},
    age: { type: 'number',columnName :'age',required : true },
    phone: { type: 'number',columnName :'number' ,required : true},
    email: { type: 'string',columnName :'email',unique :true ,required:true},

  },

};

