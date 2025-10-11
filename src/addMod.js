import './css/dialog.css'
import {toDoMain} from './toDoMain.js'

let dialog = document.createElement("dialog")
let notes = JSON.parse(window.localStorage.getItem('notes'))


 const addTasktoArray = (note) => {
        notes.push(note)
        window.localStorage.setItem('notes', JSON.stringify(notes));

}

const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const noteData = formData.get("noteInput")
    const priority = formData.get("priorityInput")
    addTasktoArray({data:noteData, priority, id:crypto.randomUUID()})
    dialog.close()
    e.target.reset()

}



const onExit = (e) => {
    let form = document.querySelector('#noteForm')
    form.reset()
    dialog.close()
}





const addMod = () => {
    //options
    let opt = ['To Do','In progress ','Done']

    //create elements
    let form = document.createElement("form")
    let noteInput = document.createElement('input')
    let priorityInput = document.createElement('select')
    let noteLabel = document.createElement('label')
    let priorityLabel = document.createElement('label')
    let closeBtn = document.createElement('button')
    let deleeBtn = document.createElement('button')

    //add classes
    dialog.classList.add("dialog")

    //add id's
    noteInput.name = 'noteInput'
    priorityInput.name = 'priorityInput'
    form.id ='noteForm'


    //text content
    noteLabel.textContent = 'Task Description'
    priorityLabel.textContent = 'Priority'
    closeBtn.textContent = 'X'
    deleeBtn.textContent ='blah'

    //loop and append each options for dropdwon
    opt.forEach((op) => {
        let option = document.createElement('option')
        option.innerHTML = op
        option.value = op
        priorityInput.appendChild(option)
    })


    
    //appends
    form.appendChild(noteLabel)
    form.appendChild(noteInput)
    form.appendChild(priorityLabel)
    form.appendChild(priorityInput)
    
    dialog.appendChild(form)
    dialog.appendChild(closeBtn)
    dialog.appendChild(deleeBtn)

    //event listners
    form.addEventListener("submit", onSubmit)
    closeBtn.addEventListener("click", onExit)


    deleeBtn.addEventListener('click',() => {
        localStorage.clear()
    })

    return dialog
}



export {addMod}