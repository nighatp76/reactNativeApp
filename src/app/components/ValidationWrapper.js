import validation from './Validation'

var validatejs = require("validate.js");

export default function validate(fieldName, value) {

  /** Validate.js validates your values as an object 
   e.g. var form = {email: 'email@example.com'}
   Line 8-9 creates an object based on the field name and field value */

  var formValues = {}
  formValues[fieldName] = value

  /** Line 13-14 creates an temporary form with the validation fields
   e.g. var formFields = {
                       email: {
                          presence: {
                            message: 'Email is blank'
                           }
                        } */

  var formFields = {}
  formFields[fieldName] = validation[fieldName]


  //alert("formValues ===>" + JSON.stringify(formValues) + "formFields ===>" + JSON.stringify(formFields))

  /**  The formValues and validated against the formFields
   the variable result hold the error messages of the field */

  if (formValues[fieldName] == "") {
    var result = validatejs({}, formFields)
  } else {
    var result = validatejs(formValues, formFields)
  }

  //console.log("result" + JSON.stringify(result))

  /** If there is an error message, return it! */

  if (result) {
    /** Return only the field error message if there are multiple */
    return result[fieldName][0]
  }

  return null
}