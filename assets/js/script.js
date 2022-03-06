$(document).ready(function () {

    // Set current date at top of page
    let currentTime = moment().format("dddd [-] LL");
    $("#currentDay").text(currentTime);

    loadTasks();

    // Function for when a save button is clicked, save text data to localStorage
    $(".saveBtn").click(function (){
        taskText = $(this).siblings("textarea").val();
        taskTime = $(this).siblings("textarea").attr("id");

        task = {
            time: taskTime,
            text: taskText
        }

        var temp = JSON.parse(localStorage.getItem('tasks'));
        if (temp === null) {
            localStorage.setItem('tasks', JSON.stringify([{ time: taskTime, text: taskText}]));
        } else {
            temp.push(task);
            localStorage.setItem('tasks', JSON.stringify(temp));
        }
    });


    // Function to load tasks from localstorage when the page loads
    function loadTasks() {
        savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks !== null) {
            for (i = 0; i < savedTasks.length; i++) {
                var loaded = savedTasks[i];
                console.log(loaded);
                if (loaded !== null) {
                    $('#' + loaded.time).val(loaded.text);
                }
            }
        }
    }

});