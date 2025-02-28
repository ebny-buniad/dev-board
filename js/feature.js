const btnCompleteds = document.querySelectorAll('.btn-complete');
for (const btnCompleted of btnCompleteds) {
    btnCompleted.addEventListener("click", function (event) {
        alert('Board updated Successfully');
        // Reduce Current Tasks
        const tasks = convertInt('numberOfTasks');
        const currentTasks = tasks - 1;
        if (currentTasks < 0) {
            return;
        }
        numberOfTasks.innerText = currentTasks;
        // Updated Total Tasks
        const totalTask = convertInt('totalTasks');
        const updatedTotalTask = totalTask + 1;
        totalTasks.innerText = updatedTotalTask;
        this.disabled = true;
        event.target.classList.add('bg-gray-500');
    })
}



// Convert String number to NUMBER
function convertInt(id) {
    const getID = document.getElementById(id);
    const convertIntGetID = parseInt(getID.innerText)
    return convertIntGetID;
}
