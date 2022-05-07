const mainHeading = document.getElementById("main-heading");
console.log(typeof mainHeading);
console.log(mainHeading);
// textContent considers all text in field
console.dir(mainHeading.textContent);
mainHeading.textContent = "Changed"
console.dir(mainHeading.textContent);
// innertext considers what is visible in webpage 
console.dir(mainHeading.innerText);
mainHeading.innerText = "Changed innerText"
console.dir(mainHeading.innerText);
