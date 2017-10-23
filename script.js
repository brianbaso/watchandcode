var todoList = {
  todos: [],
  /*displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('You finished everything!');
    } else {
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
      
        // check if .completed === true
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },*/
  
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    // this.displayTodos();
  },
  
  changeTodo: function(position, todoText) {
    // change only the todoText property with .todotext
    this.todos[position].todoText = todoText;
    // this.displayTodos();
  },
  
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    // this.displayTodos();
  },
  
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    // change only the completed property with .completed
    todo.completed = !todo.completed;
    // this.displayTodos();
  },
  
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    
    // case 1: if everything's true, make everything false
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // case 2: otherwise make everything true 
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    
    // this.displayTodos();
  }
};

/* connect buttons to DOM flexible way
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
*/

// Refactor buttons to DOM
// More specific use case only handles clicks, single event 
var handlers = {
  /*displayTodos: function() {
    todoList.displayTodos();
  },*/
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    // start from 0, clear the UL
    todosUl.innerHTML = '';
    // render data to screen
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};



















