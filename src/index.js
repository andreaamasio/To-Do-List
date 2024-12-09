import "./style.css"
import pizza from "./pizza.jpg"
// nav
const header=document.querySelector("header")
const nav=document.querySelector("nav")
const divContent=document.querySelector("#content")
const mainText=document.querySelector(".main-text")
const imgContainer=document.querySelector(".image")

const homeButton=document.createElement("button")
homeButton.textContent="Home"
nav.appendChild(homeButton)

const menuButton=document.createElement("button")
menuButton.textContent="Menu"
nav.appendChild(menuButton)

const locationsButton=document.createElement("button")
locationsButton.textContent="Locations"
nav.appendChild(locationsButton)

// div content
const h1PizzeriaAmasio=document.createElement("h1")
h1PizzeriaAmasio.textContent="Pizzeria Amasio"
mainText.appendChild(h1PizzeriaAmasio)

const pSubtext=document.createElement("p")
pSubtext.textContent="4 ingredients, 4 you"
mainText.appendChild(pSubtext)


const pizzaImg=document.createElement("img")
pizzaImg.src=pizza
imgContainer.appendChild(pizzaImg)
