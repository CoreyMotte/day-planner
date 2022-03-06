$(document).ready(function () {

    // Set current date at top of page
    let currentDate = moment().format("dddd [-] LL");
    $("#currentDay").text(currentDate);

    loadTasks();

    // Get current hour in military time from Moment
    let currentTime = moment().format("H");

    // Set color/class of text area based on what time it is
    for (i = 0; i <= 23; i++) {
        currentItem = i;
        if (currentTime == i) {
            $('#' + currentItem).addClass("present");
        } else if (currentTime > i) {
            $('#' + currentItem).addClass("past");
        } else if (currentTime < i) {
            $('#' + currentItem).addClass("future");
        }
    }

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