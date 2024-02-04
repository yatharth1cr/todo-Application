// Targeting the root element where the todos will append
const root = document.querySelector('.root');

// Targeting the input element where the input value
const input = document.querySelector('#text');

// Targeting the input element where the input value
const submit = document.querySelector('button');

// button all, active & complete
const btnAll = document.querySelector('.btn1');
const btnActive = document.querySelector('.btn2');
const btnComplete = document.querySelector('.btn3');

// variable alTodos
let allTodos =
  JSON.parse(localStorage.getItem('todos', JSON.stringify('todos'))) || [];

// event on submit
submit.addEventListener('click', handleInput);

// event on input
input.addEventListener('keydown', handleInput);

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== '') {
    let newTodo = { name: value, isDone: false };
    allTodos.push(newTodo);
    event.target.value = '';
    createUI(allTodos);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }
}

// function createUI
function createUI(allTodos) {
  root.innerHTML = '';
  allTodos.forEach((todo, index) => {
    let li = document.createElement('li');
    li.classList.add('flex');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'checkbox');
    checkBox.setAttribute('data-checkid', index);
    checkBox.checked = todo.isDone;
    let inputList = document.createElement('input');
    inputList.setAttribute('type', 'text');
    inputList.setAttribute('id', 'text');
    inputList.value = todo.name;
    if (todo.isDone) {
      inputList.style.textDecoration = 'line-through';
      inputList.style.color = '#6c1414';
    }
    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa-solid', 'fa-trash');
    deleteBtn.setAttribute('data-id', index);
    li.append(checkBox, inputList, deleteBtn);
    root.prepend(li);

    // Event Delagation is used by addEventListener on parent element root to handle click event on checkBox & deleteButton
    root.addEventListener('click', handleListClick);
    // function handleListClick
    function handleListClick(event) {
      if (event.target.type === 'checkbox') {
        handleCheckBox(event.target);
      }
      if (event.target.classList.contains('fa-trash')) {
        handleClickDelete(event.target);
      }
    }

    // function handleCheckBox
    function handleCheckBox(checkbox) {
      let id = checkbox.dataset.checkid;
      if (checkbox.checked && id) {
        allTodos[id].isDone = true;
      } else {
        allTodos[id].isDone = false;
      }
      localStorage.setItem('todos', JSON.stringify(allTodos));
      createUI(allTodos);
    }
    // function handleClickDelete
    function handleClickDelete(deleteBtn) {
      let index = deleteBtn.dataset.id;
      allTodos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(allTodos));
      createUI(allTodos);
    }

    //event on inputList
    inputList.addEventListener('input', function (event) {
      handleInputlist(event, index);
    });
    // function handleInputlist
    function handleInputlist(event, index) {
      if (allTodos[index]) {
        allTodos[index].name = event.target.value;
        localStorage.setItem('todos', JSON.stringify(allTodos));
      }
    }
  });
}

// event on btnAll
btnAll.addEventListener('click', handleBtnAll);
// function handleBtnAll
function handleBtnAll() {
  btnAll.style.backgroundColor = '#0ab6ab';
  btnActive.style.backgroundColor = '#fff';
  btnComplete.style.backgroundColor = '#fff';
  createUI(allTodos);
}

// event on btnActive
btnActive.addEventListener('click', handleBtnActive);
// function handleBtnActive
function handleBtnActive() {
  let activeTodos = allTodos.filter((todo) => !todo.isDone);
  btnActive.style.backgroundColor = '#ff5c5c';
  btnAll.style.backgroundColor = '#fff';
  btnComplete.style.backgroundColor = '#fff';
  createUI(activeTodos);
}

// event on btnComlete
btnComplete.addEventListener('click', handleBtnComplete);
// function handleBtnComplete
function handleBtnComplete() {
  let completeTodos = allTodos.filter((todo) => todo.isDone);
  btnComplete.style.backgroundColor = '#60ff8b';
  btnActive.style.backgroundColor = '#fff';
  btnAll.style.backgroundColor = '#fff';
  createUI(completeTodos);
}

createUI(allTodos);
