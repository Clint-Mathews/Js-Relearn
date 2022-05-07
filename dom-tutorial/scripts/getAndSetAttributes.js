const link = document.querySelector("a");
console.log(link)
console.log(link.getAttribute("href"))
console.log(link.getAttribute("href").slice(1))
link.setAttribute("href","https://www.linkedin.com/in/clint-mathews/")
console.log(link.getAttribute("href"))

const input = document.querySelector(".form-todo input")
console.log(input)
console.log(input.getAttribute("type"))