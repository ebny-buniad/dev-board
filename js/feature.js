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
        else if (currentTasks === 0) {
            alert("Congratulations!!! You have complete the current task");
        }
        numberOfTasks.innerText = currentTasks;
        // Updated Total Tasks
        const totalTask = convertInt('totalTasks');
        const updatedTotalTask = totalTask + 1;
        totalTasks.innerText = updatedTotalTask;
        this.disabled = true;
        event.target.classList.add('bg-gray-200', 'text-gray-400');

        // History Section 

        // Find Task title
        const parentDiv = btnCompleted.parentElement.parentElement.parentElement;
        const taskTitle = parentDiv.querySelector('.task-title').innerText;
        // Add History
        const historyContainer = document.getElementById('history-container');
        const div = document.createElement('div');
        div.classList.add('bg-white', 'text-xs', 'p-2', 'rounded-md', 'mb-1');
        div.innerHTML = `<p>You have Complete The Task <span>${taskTitle}</span></p>`;
        historyContainer.appendChild(div);

        // Clear History
        document.getElementById('dlt-history-btn').addEventListener('click', function () {
            historyContainer.innerHTML = '';
        })
    })
}


















// Call color generate function 
document.getElementById('theme-btn').addEventListener('click', function (event) {
    const htmlBodyBgColor = document.getElementById('html');
    htmlBodyBgColor.style.backgroundColor = generateRandomColor();
})

// Date find 
document.getElementById('date').innerText = new Date().toDateString();

// Convert String number to NUMBER
function convertInt(id) {
    const getID = document.getElementById(id);
    const convertIntGetID = parseInt(getID.innerText)
    return convertIntGetID;
}

// Color generate function
function generateRandomColor() {
    let hexCodeDigit = '0123456789ABCDF';
    let hexCodeSign = '#';
    for (let i = 0; i < 6; i++) {
        hexCodeSign = hexCodeSign + hexCodeDigit[Math.floor(Math.random() * 16)];
    }
    return hexCodeSign;
}