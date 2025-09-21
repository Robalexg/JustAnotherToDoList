
import './css/todomain.css'
import searchImg from './images/search.png'
import bellImg from './images/bell.png'
import calenderImg from './images/calender.png'
import profileImg from './images/profile.jpg'

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

const noteContainer = () => {
    //create elements
    let noteContainer = document.createElement('div')

    //add classes
    noteContainer.classList.add("noteContainer")
    noteContainer.textContent = 'notes'

    return noteContainer

}



const toDoMain = () => {
    //create elements
    let div = document.createElement("div")



    //add classes
    div.classList.add("toDoMainContainer")

    //appends
    div.appendChild(nav())
    div.appendChild(noteContainer())

    return div 
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


