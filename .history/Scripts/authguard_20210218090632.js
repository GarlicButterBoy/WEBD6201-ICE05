"use strict";

function() 
{
//if the user isn't logged in, redirect to login.html
if (!sessionStorage.getItem("user"))
    {
      //redirect to the secure area
      location.href = "login.html";
    }
});

