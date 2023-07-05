// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButtom = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



// EVENT LISTENER

todoButtom.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);




// FUNCTIONS 
function addTodo(event){
    // prevent form from submiting
   event.preventDefault(); 

    //Todo Div
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check mark button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class ="fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     //Check trash button 
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class ="fas fa-trash" ></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    //Append the list
     todoList.appendChild(todoDiv);
    //Clear input value 
    todoInput.value="";

}



function deleteCheck(e){
  const item= e.target;
  // delete todo

  if(item.classList[0] === "trash-btn"){
const todo = item.parentElement;
todo.classList.add("fall");

todo.addEventListener('transitionend', function(){

    todo.remove();

})
}

//check item
if(item.classList[0] === "complete-btn"){

const todo = item.parentElement;
todo.classList.toggle("completed");
}
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo) {
        switch (e.target.value){
            case "all" :
                todo.style.display ="flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
    
                    todo.style.display = "none";
                }    
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else{
    
                    todo.style.display = "none";
                }  
                break;  
                

                           
    
    
        }
    
    
    
    }
  
    
    )
    
    
    
    
    
    
    
    
    
    }