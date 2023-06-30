const { query  } = require("express-validator");
  
  
const dateValidateAPI = [
      
    query("fechainicial")
        .isDate()
        .withMessage("fechainicial debe ser una fecha valida"),
    query("fechafinal")
        .isDate()
        .withMessage("fechafinal debe ser una fecha valida"),
   
  ];

  
  module.exports = dateValidateAPI;