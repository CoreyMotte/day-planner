$(document).ready(function () {

    let currentTime = moment().format("dddd [-] LL");
    $("#currentDay").text(currentTime);

    // Function for when a save button is clicked, save text data to localStorage
    $(".saveBtn").click(function (){
        taskText = $(this).siblings("textarea").val();
        taskTime = $(this).siblings("textarea").attr("id");

        task = {
            time: taskTime,
            text: taskText
        }

        temp = JSON.parse(localStorage.getItem('tasks'));
        if (temp === null) {
            localStorage.setItem('tasks', JSON.stringify([{ time: taskTime, text: taskText}]));
        } else {
            temp.push(task);
            localStorage.setItem('tasks', JSON.stringify(temp));
        }
    });

});