import './css/sidenav.css'
import logo from './images/logo.png'
import dash from './images/dash.png'


const sidenav = () =>{
    //create Elements
    let div = document.createElement('div')
    let logoImg = document.createElement('img')
    let dashContainer = document.createElement('div')
    let dashImg = document.createElement("img")
    
    //add classes 
    dashContainer.classList.add("dashContainer")


    //add id's
    div.id = 'sideNav'
    logoImg.id = 'logo'
    dashImg.id = 'dash'
    
    //add src's to imgs
    logoImg.src = logo
    dashImg.src = dash



    //appends
    dashContainer.appendChild(dashImg)
    div.appendChild(logoImg)
    div.appendChild(dashContainer)

    return div
}


export {sidenav}