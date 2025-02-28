console.log('Hello ')

const btnCompleteds = document.querySelectorAll('.btn-complete');
for (const btnCompleted of btnCompleteds) {
    btnCompleted.addEventListener("click", function () {
        alert('Board updated Successfully');
    })

}

