// Grabbing the element 
 const taskInput = document.getElementById('taskInput');
 const addButton = document.getElementById('buttonAction');
 const taskDisplay = document.getElementById('taskDisplay');
 const deleteBtn = document.getElementById('deleteBtn');
 // function to add new item

 function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText == ""){
      return alert("Please fill the input");
    }
   
    const li = document.createElement("li");
    li.textContent = taskText;
     li.addEventListener('click', ()=>{
     li.classList.toggle("done");
    });
    // create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
deleteBtn.style.backgroundColor= "red";
  // delete only this task
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents toggling "done"

    
    });
    li.addEventListener("contextmenu",(e)=> {e.preventDefault()
        li.remove()
    });

    li.appendChild(deleteBtn);

    taskDisplay.appendChild(li);
    taskInput.value = "";
     
    
}
 
 // detect when the user click the button
addButton.addEventListener("click", addTask);
 

