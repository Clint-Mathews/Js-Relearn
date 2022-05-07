 console.log(this)
 console.log(window)
 // Hoisting
 myFunction();
 console.log(myFunction)
 console.log(fullname)
 fullname= "Testtss"
 console.log(fullname)


 function myFunction(){
     console.log("This is my function");
 }
 var firstName = "Clint"
 var lastname = "M"
 var fullname = firstName + " " + lastname
 console.log(fullname)
