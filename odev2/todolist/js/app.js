const list = document.getElementById('list')
const task = document.getElementById('task')
const alert = document.getElementById('alert')
// const close = document.getElementById('delete')
const li = Array.from(document.getElementsByTagName('li'))

let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

window.addEventListener('DOMContentLoaded', renderDOM(todos));


list.addEventListener("click", function (e) {
    e.target.classList.toggle('checked')

    if (e.target.id === 'delete') {
        removeTodoFromArray(e.target.getAttribute('data-id'))
        showAlert('Basarili! ', 'Gorev Listeden Silindi', 'alert-info')
        renderDOM(todos)
    }
}

)
function renderDOM(todos) {
    list.innerHTML = ''
    todos.forEach(element => {

        const li = document.createElement('li')
        li.innerHTML = `      
                    ${element.title}
                    <span class="close" id='delete' data-id=${element.id} >x</span>
        `
        list.appendChild(li)
    });
}
function showAlert(title, body, classEl) {
    const alertMessage =
        `
    <strong id="alert-title">${title}</strong>
    <span id="alert-body">${body}</span>
    
    `

    alert.style.display = 'flex'
    setTimeout(() => {
        alert.style.display = 'none'
    }, 2000)
    alert.classList.add(classEl)
    alert.innerHTML = alertMessage

}


function removeTodoFromArray(id) {
    todos = todos.filter(el => el.id != id)
    localStorage.setItem("todos", JSON.stringify(todos));

}
function newElement() {
    let id = Math.floor(Math.random() * 1000)
    if (task.value != '') {
        showAlert('Başarılı!', 'Listeye eklendi', 'alert-success')
        todos.push({ title: task.value, id: id })
    } else {
        showAlert('Basarisiz!', 'Bu Alan Bos Birakilamaz', 'alert-danger')

    }

    renderDOM(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    task.value = ''
}

