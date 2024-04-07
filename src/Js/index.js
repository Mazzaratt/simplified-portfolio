/*

- Objective 1 - When the user clicks the "show more" button, it should reveal the hidden projects in the HTML.

    Step 1 - Retrieve the "show more" button in JavaScript to be able to check when the user clicks on it.

    Step 2 - Identify the click on the button.

    Step 3 - Add the "active" class to the hidden projects.

- Objective 2 - Hide the "show more" button.

    Step 1 - Retrieve the button and hide it. 
  
  */

  //Objective 1 - When the user clicks the "show more" button, it should reveal the hidden projects in the HTML.

  //Step 1 - Retrieve the "show more" button in JavaScript to be able to check when the user clicks on it.

const bottonShowProjects = document.querySelector('.show_projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)');

bottonShowProjects.addEventListener('click', () => {
    //Step 3 - Add the "active" class to the hidden projects.
    showmoreprojects();

    //Objective 2 - Hide the "show more" button.
    //Step 1 - Retrieve the button and hide it. 

    hideshowmorebotton();

});

function hideshowmorebotton() {
    bottonShowProjects.classList.add("remove");
}

function showmoreprojects() {
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.add('active');
    });
}
