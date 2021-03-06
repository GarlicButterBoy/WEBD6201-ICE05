"use strict";

//Contact Class

(()=>{
    class User {

        //getters and setters
      get DisplayName() 
      {
          return this.m_displayName;
      }
      get Username() 
      {
          return this.m_username;
      }
      get EmailAddress() 
      {
          return this.m_emailAddress;
      }
      set FullName(value) 
      {
          this.m_fullName = value;
      }
      set ContactNumber(value) 
      {
          this.m_conactNumber = value;
      }
      set EmailAddress(value) 
      {
          this.m_emailAddress = value;
      }
    
        //Constructor
        /**
         * A Constructor for any Contact objects being instantiated
         * @param {string} fullName 
         * @param {string} contactNumber 
         * @param {string} emailAddress 
         */
        constructor(fullName = "", contactNumber = "", emailAddress = "") 
        {
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
            this.FullName = fullName;
        }
    
    
        
        //Methods
        /**
         * Overrides the toString method to print the Contact class
         * @returns {string}
         */
        toString() 
        {
            return `Full Name: ${this.m_fullName}\nPhone: ${this.m_contactNumber}\nEmail: ${this.m_emailAddress}`;
        }
    
        /**
         * This method returns a JSON Object
         * @returns {Object}
         */
        toJSON()
        {
            return {
                "FullName":this.FullName,
                "ContactNumber":this.ContactNumber,
                "EmailAddress":this.EmailAddress
            }
        }

        /**
         * This method converts JSON data object and assigns the values into a contact class object 
         * @param {Object} data 
         */
        fromJSON(data)
        {
            this.FullName = data.FullName;
            this.ContactNumber = data.ContactNumber;
            this.EmailAddress = data.EmailAddress;   
        }

        /**
         * Method converts the Contact into a comma-seperated value string
         * @returns {String}
         */
        serialize()
        {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            else 
            {
                console.error("Error: One of more of the Contact Properties are empty or null.");
                return null;
            }
            
        }
        /**
         * Method takes a comma-seperated data string and assigns the values to the contact class properties
         * @param {string} data
         * @returns {void} 
         */
        deserialize(data)
        {
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    
    }

core.Contact = Contact;

})(core || (core={}));



