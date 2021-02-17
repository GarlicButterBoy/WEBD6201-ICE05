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
      set DisplayName(value) 
      {
          this.m_displayName = value;
      }
      set Username(value) 
      {
          this.m_username = value;
      }
      set EmailAddress(value) 
      {
          this.m_emailAddress = value;
      }
      get Password() 
      {
          return this.m_password;
      }
      set Password(value) 
      {
          this.m_password = value;
      }
    
        //Constructor
        /**
         * A Constructor for any Contact objects being instantiated
         * @param {string} fullName 
         * @param {string} contactNumber 
         * @param {string} emailAddress 
         */
        constructor(DisplayName = "", Username = "", EmailAddress = "", Password = "") 
        {
            this.Username = username;
            this.EmailAddress = emailAddress;
            this.DisplayName = fullName;
            this.Password = password;
        }
    
    
        
        //Methods
        /**
         * Overrides the toString method to print the Contact class
         * @returns {string}
         */
        toString() 
        {
            return `Display Name: ${this.FullName}
            \Username: ${this.m_username}\nEmail: ${this.m_emailAddress}`;
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
            this.DiaplyName = propertyArray[0];
            this.Username = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    
    }

core.User = User;

})(core || (core={}));



