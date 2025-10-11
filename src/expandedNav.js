import './css/expandednav.css'



const expandedNav = () => {

    //menu items
    let menuItems = ['All Tasks (0)','To Do (0)','In Progress (0)','Done (0)']

    //create elements
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let ul = document.createElement('ul')

    //Loop through menu items appending each li to ul
    menuItems.forEach((item) => {
        let li = document.createElement("li")
        let line = document.createElement('div')

        li.textContent = item
        li.prepend(line)

        ul.appendChild(li)
    })

    // jfksjkdjf



    //add classes 
    div.classList.add("expandedNav")

    //add id's

    //add text content 
    h1.textContent = 'Tasks'


    //append
    div.appendChild(h1)
    div.appendChild(ul)




    return div
}



export {expandedNav}