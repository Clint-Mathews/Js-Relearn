const navItems = document.getElementsByClassName("nav-item") // HTML Collection
console.log(navItems)
console.log(Array.isArray(navItems))
console.log(navItems[1])

const navItemsSelector = document.querySelectorAll(".nav-item") // NodeList
console.log(navItemsSelector)
console.log(Array.isArray(navItemsSelector))
console.log(navItemsSelector[1])

