
const validation = {
  email: {
    /** Email is required+ */
    presence: true,
    /** and must be an email (duh) */
    email: {
      message: "^Please enter valid email"
    }
  },
  password: {
    /** Password is also required */
    presence: true,
    /** And must be at least 5 characters long */
    length: {
      minimum: 5,
      message: "^Password must be at least 5 characters"
    }
  },
  "confirm-password": {
    /** You need to confirm your password */
    presence: true,
    /** and it needs to be equal to the other password */
    
  },
  username: {
    /** You need to pick a username too */
    presence: true,
    /** And it must be between 3 and 20 characters long */
    length: {
      minimum: 3,
      maximum: 20
    },
    format: {
      /** We don't allow anything that a-z and 0-9 */
      pattern: "[a-z0-9]+",
      /** but we don't care if the username is uppercase or lowercase */
      flags: "i",
      message: "can only contain a-z and 0-9"
    }
  },
  birthdate: {
    /** The user needs to give a birthday */
    presence: true,
    /** and must be born at least 18 years ago */
    date: {
      /** latest: moment().subtract(18, "years"), */
      message: "^You must be at least 18 years old to use this service"
    }
  },
  country: {
    /** You also need to input where you live */
    presence: true,
    /** And we restrict the countries supported to Sweden */
    inclusion: {
      within: ["SE"],
      /** The ^ prevents the field name from being prepended to the error */
      message: "^Sorry, this service is for Sweden only"
    }
  },
  zip: {
    /** Zip is optional but if specified it must be a 5 digit long number */
    format: {
      pattern: "\\d{5}"
    }
  },
  "number-of-children": {
    presence: true,
    /** Number of children has to be an integer >= 0 */
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 0
    }
  },
  "location": {
    presence: true,
  },

  "roles": {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20
    },
    format: {
      /** We don't allow anything that a-z and 0-9 */
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "can only contain a-z and 0-9"
    }
  },
  "mobile-number": {
    presence: true,
    length: {
      minimum: 10,
      maximum: 10
    },
    format: {
      pattern: "[0-9]+",
      flags: "i",
      message: "can only contain 0-9"
    }
  },
  "emp-code": {
    presence: true,
    length: {
      minimum: 5,
      maximum: 10
    },
    format: {
      pattern: "[0-9]+",
      flags: "i",
      message: "can only contain 0-9"
    }
  },
  name: {
    /** You need to pick a name too */
    presence: true,
    /** And it must be between 3 and 20 characters long */
    length: {
      minimum: 3,
      maximum: 20
    },
    format: {
      /** We don't allow anything that a-z*/
      pattern: "([a-z] ?)+[a-z]",
      /** but we don't care if the name is uppercase or lowercase */
      flags: "i",
      message: "can only contain a-z"
    }
  },
  'oldPassword': {
    /** You need to pick a name too */
    presence: true,
    /** And it must be between 3 and 20 characters long */
    length: {
      minimum: 5
    }
  },
  'newPassword': {
    /** You need to pick a name too */
    presence: true,
    /** And it must be between 3 and 20 characters long */
    length: {
      minimum: 5
    }
  },
  "inventory": {
    presence: true,
  },
  "status": {
    presence: true,
  },
  "comments": {
    presence: true,
  },
  "inventory-name": {
    presence: true,
    format: {
      pattern: "([a-z0-9] ?)+[a-z0-9]",
      flags: "i",
      message: "can only contain a-z and 0-9"
    }
  },
  "no-inventories": {
    presence: true,
    format: {
      pattern: "[0-9]+",
      flags: "i",
      message: "can only contain 0-9"
    }
  },
  "serial-number": {
    presence: true,
    format: {
      /** We don't allow anything that a-z and 0-9 */
      pattern: "[a-z0-9]+",
      /** but we don't care if the username is uppercase or lowercase */
      flags: "i",
      message: "can only contain a-z and 0-9"
    }
  }
}

export default validation