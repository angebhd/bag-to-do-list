
console.log('JS is Running')

    // gett all saved data, if there is not, creta an empty array
let allTasks = JSON.parse(localStorage.getItem('allTasks')) || []
//Now display all the previous tasks tasks
taskNumber = allTasks.length
for (let index = 0; index < taskNumber; index++) {
    console.log(index);
    displayTask(allTasks[index]);

}
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // create an object with the data comming from the form
    const oneTaskData = {
        id: taskNumber++,
        task: this.elements['task'].value,
        description: this.elements['description'].value,
        prioritize: this.elements['prioritize'].checked
    };

    // update tasks on the array  and put it on the local storage
    allTasks.push(oneTaskData);
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    console.log(allTasks);

    displayTask(oneTaskData);

    // Output the object (you can perform further actions with it)
    console.log(oneTaskData);

    this.reset(); // Reset form 

});

function displayTask(taskObjet) {
if (taskObjet !== null) {
    // create a div tag to display the task
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
      <p>ID: ${taskObjet.id}</p>
      <h2>${taskObjet.task} </h2>
      <span id= "${taskObjet.id}" class = "trash" >&#128465;</span> 
      <p>${taskObjet.description}</p>
      <hr>
    `;
    if (taskObjet.prioritize) {taskDiv.classList.add('prioritize');}

    // Display the task data on the screen
    const displayDiv = document.getElementById('displayTasks');
    displayDiv.appendChild(taskDiv);


}}

// Get all elements with the class 'trash'
const trashIcons = document.querySelectorAll('.trash');

// Iterate through each trash icon and attach a click event listener
trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener('click', function(event) {
    // Access the ID of the clicked task
    const clickedId = event.target.id;
    // Perform an action with the ID (for example, delete the corresponding task)
    const taskToDelete = document.getElementById(clickedId);
    console.log(clickedId);
    if (taskToDelete) {
        deleteOneTask(clickedId);
    }
  });
});

function deleteOneTask(idToDelete) {
   allTasks = allTasks.filter(task => task.id !== +idToDelete);
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    console.log(allTasks);


    // location.reload();
}

function updateOneTask(id) {
    //update tasks
}