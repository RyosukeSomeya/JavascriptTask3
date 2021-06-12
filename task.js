const addBtn = document.getElementById('add-task');
const taskLists = [];

addBtn.addEventListener('click', () => {
    // get form input value
    const inputValue = document.getElementById('new-task').value;
    const task = {
        comment: inputValue,
        state: 'wip'
    }
    taskLists.push(task);
    // form reset
    document.getElementById('new-task').value = '';
    // show table row
    if (taskLists.length > 0) {
        showTask(taskLists);
    }
})


function showTask(taskLists) {
    const targetElem = document.getElementById('table-body');
    let rowElement;

    taskLists.forEach((task, index) => {
        let btnValue = '完了';
        if (task.state === 'wip') {
            btnValue = '作業中';
        }
        // Create table row elements.
        rowElement = document.createElement('tr');
        const idCell = document.createElement('td');
        const commentCell = document.createElement('td');
        const stateCell = document.createElement('td');
        const stateBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        // Set contents to row elements.
        idCell.innerText = index;
        commentCell.innerText = task.comment;
        stateBtn.innerText = btnValue;
        deleteBtn.innerText = '削除';
        stateCell.appendChild(stateBtn);
        stateCell.appendChild(deleteBtn);
        rowElement.appendChild(idCell);
        rowElement.appendChild(commentCell);
        rowElement.appendChild(stateCell);
    });
    targetElem.appendChild(rowElement);
}
