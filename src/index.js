document.addEventListener("DOMContentLoaded", () => {
  const createNewTask = document.querySelector('form input + input')

  createNewTask.addEventListener('click', e => {
    e.preventDefault();

    // Variable Declaration
    const toDo = document.createElement('tr');
    const newToDo = document.getElementById('new-task-description').value;
    const deleteBtn = document.createElement('button');
    const prioritySelection = document.querySelector('select').value;
    const priority = document.getElementById('select')

    const user = document.getElementById('new-user').value;
    const duration = document.getElementById('new-duration').value;
    const dateDue = document.getElementById('new-date-due').value;

    // const priorityDropDown = document.createElement('select');
    // const lowPriority = document.createElement('option');
    // const medPriority = document.createElement('option');
    // const highPriority = document.createElement('option');

    const form = document.getElementById("create-task-form")

    // lowPriority.textContent = "Low";
    // medPriority.textContent = "Medium";
    // highPriority.textContent = "High";
     
    deleteBtn.textContent = 'X';

    // Adds ToDo Item to new row in table
    if(newToDo) {
      document.querySelector('#tableList').append(toDo);
      toDo.append(deleteBtn);
      
      function appendItem(parameter) {
        const newData = document.createElement('td');
        newData.textContent = parameter;
        toDo.append(newData);
      }

      appendItem(newToDo);
      addPriority()
      appendItem(user);
      appendItem(duration);
      appendItem(dateDue);
      priorityColor(prioritySelection);

      // Add Priority to Task
      function addPriority() {
        toDo.append(priority.cloneNode(true))
        // toDo.append(priorityDropDown);
        // priorityDropDown.append(lowPriority, medPriority, highPriority);
   
        // if(prioritySelection === "Low") {
        //   lowPriority.setAttribute("selected", "")
        // } else if (prioritySelection === "Medium") {
        //   medPriority.setAttribute("selected", "")
        // } else if (prioritySelection === "High") {
        //   highPriority.setAttribute("selected", "")
        // }
      }
    }

    // Deletes ToDo Item
    deleteBtn.addEventListener('click', e => {
      e.target.parentNode.remove();
    })

    // Change color of to do based on priority
    priority.addEventListener('change', e => {
      priorityColor(e.target.value);
    })

    function priorityColor(prioritySelection){
      if(prioritySelection === 'Low'){
        toDo.style.color = 'green';
      } else if(prioritySelection === 'Medium') {
        toDo.style.color = 'orange';
      } else if(prioritySelection === 'High') {
        toDo.style.color = 'red';
      }
    }

    form.reset()
  })
});
