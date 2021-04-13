const list = document.getElementById('list')
const task = document.getElementById('task')
const closeBtn = document.getElementById('close')
const li = Array.from(document.getElementsByTagName('li'))

const todos = []

// function deleteTodo(id) {

// }


list.addEventListener("click", function (e) {
    e.target.classList.toggle('checked')
    // if (e.target && e.target.matches(li.item)) {
    //     console.log(e.target)
    // }
});

// function showTodo(todos) {
//     todos.map(el => {
//         const li = document.createElement('li')
//         li.innerHTML = `      
//             ${el}
//             <span class="close" id='close' >x</span>`
//         list.appendChild(li)
//     }
//     )
// }

function newElement() {

    const li = document.createElement('li')
    li.innerHTML = `      
                ${task.value}
                <span class="close" id='close' >x</span>
    `
    list.appendChild(li)



    todos.push(task.value)
    console.log(todos);
    localStorage.setItem("todos", todos);
    task.value = ''
}

