console.log('Hello ')

const btnCompleteds = document.querySelectorAll('.btn-complete');
for (const btnCompleted of btnCompleteds) {
    btnCompleted.addEventListener("click", function () {
        alert('Board updated Successfully');
        const numberOfTasks = document.getElementById('numberOfTasks');
        const INT_numberOfTasks = parseInt(numberOfTasks.innerText);
        const currentTasks = INT_numberOfTasks - 1;
        numberOfTasks.innerText = currentTasks;
        console.log(currentTasks);
    })

}

