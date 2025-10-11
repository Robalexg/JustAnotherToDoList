
import './css/todomain.css'
import searchImg from './images/search.png'
import bellImg from './images/bell.png'
import calenderImg from './images/calender.png'
import profileImg from './images/profile.jpg'
import addImg from './images/add.png'
import {addMod} from './addMod.js'


let addModal = addMod()
let notes = JSON.parse(window.localStorage.getItem('notes'))
console.log(notes)


const nav = () => {
    //get current date 
    const currentDate = new Date();
    const curDate = currentDate.toDateString().slice(4)


    //create elements
    let nav = document.createElement("nav")
    let left = document.createElement('div')
    let right = document.createElement('div')
    let greeting = document.createElement('h1')
    let search = document.createElement('img')
    let bell = document.createElement('img')
    let calender = document.createElement('img')
    let date = document.createElement('p')
    let profile = document.createElement('img')

    //add classes
    nav.classList.add("nav")
    right.classList.add('right')

    //add id 
    profile.id = 'profile'
    date.id = 'date'

    //src to images
    search.src = searchImg
    bell.src = bellImg
    calender.src = calenderImg
    profile.src = profileImg

    //add text content
    greeting.textContent = 'Welcome Back, Julius'
    date.textContent = curDate


    //appends
    left.appendChild(greeting)

    right.appendChild(search)
    right.appendChild(bell)
    right.appendChild(calender)
    right.appendChild(date)
    // right.appendChild(month)
    // right.appendChild(year)
    right.appendChild(profile)

    nav.appendChild(left)
    nav.appendChild(right)

    return nav
}


const createNote = (data,priority,id) => {

    //get date
    const currentDate = new Date();
    const curDate = currentDate.toDateString().slice(4)

    //options for drop down
    let opt = ['To Do','In progress ','Done']

    //create elements
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let closeBtn = document.createElement('button')
    let edit = document.createElement('p')
    let header = document.createElement('div')
    let date = document.createElement('p')
    let form = document.createElement('form')
    let input = document.createElement("select")
    let footer = document.createElement('div')

    //add classses  
    div.classList.add("note")
    header.classList.add('noteHeader')
    footer.classList.add('footer')
    closeBtn.classList.add("closeBtn")

    //add src to images
    // edit.src = editImg

    //loop through options and append to select
    opt.forEach((op) => {
        let option = document.createElement('option')
        option.innerHTML = op
        option.value = op
        input.appendChild(option)
    })

    //add Id
    closeBtn.id = id
    footer.id = 'footer'
    date.id = 'date'


    //add text content 
    h1.textContent = data
    date.textContent = curDate
    closeBtn.textContent = "X"

    //add event listner
    closeBtn.addEventListener('click',deleteNoteFromArray)



    //appends
    form.appendChild(input)

    header.appendChild(h1)
    header.appendChild(closeBtn)

    
    
    footer.appendChild(date)
    footer.appendChild(form)

    div.appendChild(header)
    div.appendChild(footer)


    return div
}

const createNewNoteCard = (type) => {
    //create Elements
    let div = document.createElement('div')
    let header = document.createElement('div')
    let h1 = document.createElement('h1')
    let btn = document.createElement('p')
    let addNew = document.createElement('div')
    let addIcon = document.createElement('img')


    
    //add classes
    div.classList.add("noteCard")
    header.classList.add('header')
    addNew.classList.add("newBtnContainer")


    //add id's
    addIcon.id = 'addIcon'

    //add src to image
    addIcon.src = addImg



    //add text content
    btn.textContent = 'Add new task'
    h1.textContent = type
    
    //event listners
    addNew.addEventListener("click", () => {
        addModal.showModal()
    })

    //append
    addNew.appendChild(addIcon)
    addNew.appendChild(btn)

    header.appendChild(h1)

    if(type.slice(0,2) == 'To'){
        header.appendChild(addNew)
    }

    div.appendChild(header)

    //loop throught notes and append
    notes.forEach((n) => {
        div.appendChild(createNote(n.data,n.priotriy,n.id))
    })


    return div
}

const noteContainer = () => {
    //create elements
    let noteContainer = document.createElement('div')

    //add classes
    noteContainer.classList.add("noteContainer")

    //add text content


    //appends
    noteContainer.append(createNewNoteCard("To Do (0)"))
    noteContainer.append(createNewNoteCard("In Progress (0)"))
    noteContainer.append(createNewNoteCard("Done (0)"))

    return noteContainer

}

const toDoMain = () => {
    //create elements
    let div = document.createElement("div")

    let notes = JSON.parse(window.localStorage.getItem('notes'))


    //add classes
    div.classList.add("toDoMainContainer")

    //appends
    div.appendChild(nav())
    div.appendChild(noteContainer())
    div.appendChild(addModal)

    return div 
}


const appendNotes = () => {
    
}

const deleteNoteFromArray = (e) => {
    notes = notes.filter((n) => n.id !== e.target.id)
    window.localStorage.setItem('notes', JSON.stringify(notes));

}

export {toDoMain}



// }

// const init = ()  => {
//     appendNotes()
//     form.addEventListener('submit',(e) => {
//         e.preventDefault(e)
//         let note = createNote(input.value,'low')
//         input.value = ''
//         addNotetoArray(note)
//         appendNotes()
//     })

// }




// const toDoMain = () => {

//     // get data
//     let notes = JSON.parse(window.localStorage.getItem('notes'))
    
//     //create elements
//     let div = document.createElement('div')
//     let form = document.createElement('form')
//     let input = document.createElement('input')
//     let noteContainer = document.createElement('div')

//     //add classes
//     noteContainer.classList.add('noteContainer')

//     //appends
//     form.appendChild(input)
//     div.appendChild(form)
//     div.appendChild(noteContainer)

//     //functions
//     const createNote = (data,priority) => {
//         return {
//             data,
//             id:crypto.randomUUID(),
//             priority
//         }
//     }

//     const appendNotes = () => {
//         noteContainer.replaceChildren('')


//         notes.forEach((note) => {
//             let div = document.createElement("div")
//             let h1 = document.createElement("h1")
//             let deleteBtn = document.createElement("button")

//             div.classList.add("noteCard")

//             h1.textContent = note.data
//             deleteBtn.textContent = 'delete'

//             deleteBtn.addEventListener('click',(e) => {
//                 deleteNoteFromArray(note.id)
//             })




//             div.appendChild(h1)
//             div.appendChild(deleteBtn)
//             noteContainer.appendChild(div)
//         })


//     }

//     const addNotetoArray = (note) => {
//         notes.push(note)
//         window.localStorage.setItem('notes', JSON.stringify(notes));

//     }

//     const deleteNoteFromArray = (id) => {
//         notes = notes.filter((n) => n.id !== id)
//         window.localStorage.setItem('notes', JSON.stringify(notes));
//         appendNotes()

//     }

//     const addEventListeners = ()  => {
//             form.addEventListener('submit',(e) => {
//                 e.preventDefault(e)
//                 let note = createNote(input.value,'low')
//                 input.value = ''
//                 addNotetoArray(note)
//                 appendNotes()
//             })

//     }

//     addEventListeners()
//     appendNotes()

//     return div
// }


