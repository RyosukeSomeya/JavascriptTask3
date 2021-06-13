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
        addTask(taskLists);
    }
})

function addTask(taskLists) {
    const rowElements = [];
    taskLists.forEach((task, index) => {
        let btnValue = '完了';
        if (task.state === 'wip') {
            btnValue = '作業中';
        }
        // Create table row element s.
        const row = document.createElement('tr');
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
        deleteBtn.setAttribute('onclick', `deleteTask(${index})`);
        stateCell.appendChild(stateBtn);
        stateCell.appendChild(deleteBtn);
        row.appendChild(idCell);
        row.appendChild(commentCell);
        row.appendChild(stateCell);
        rowElements.push(row);
    });
    showTask(rowElements);
}

function showTask(rowElements) {
    const targetElem = document.getElementById('table-body');
    // targetElemが子要素を持っていたら初期化
    if (targetElem.hasChildNodes()) {
        targetElem.innerHTML = '';
    }
    rowElements.forEach(row => {
        targetElem.appendChild(row);
    })
}

function deleteTask(index) {
    taskLists.splice(index, 1);
    addTask(taskLists)
}