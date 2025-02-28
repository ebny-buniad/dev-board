console.log('Hello ')

const btnCompleteds = document.querySelectorAll('.btn-complete');
for (const btnCompleted of btnCompleteds) {
    btnCompleted.addEventListener("click", function () {
        alert('Board updated Successfully');
        const tasks = convertInt('numberOfTasks');
        const currentTasks = tasks - 1;
        if (currentTasks < 0) {
            return;
        }
        numberOfTasks.innerText = currentTasks;
        const totalTask = convertInt('totalTasks');
        const updatedTotalTask = totalTask + 1;
        totalTasks.innerText = updatedTotalTask;
    })
}

function convertInt(id) {
    const getID = document.getElementById(id);
    const convertIntGetID = parseInt(getID.innerText)
    return convertIntGetID;
}
