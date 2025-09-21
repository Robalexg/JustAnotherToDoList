import './css/styles.css'
import { sidenav } from './sideNav'
import { expandedNav } from './expandedNav'
import { toDoMain } from './toDoMain'


let app = document.querySelector('.appContainer')


// append to screen
// form.appendChild(input)
// content.appendChild(form)
// content.appendChild(noteContainer)
// sidenavContainer.appendChild(sidenav())

app.appendChild(sidenav())
app.appendChild(expandedNav())
app.appendChild(toDoMain())




