const addBtn = document.getElementById('addTask');
const taskLists = [];

addBtn.addEventListener('click', () => {
    // get form input value
    const inputValue = document.getElementById('newTask').value;
    const task = {
        comment: inputValue,
        state: 'wip'
    }
    taskLists.push(task);
    // form reset
    document.getElementById('newTask').value = '';
    // show table row
    if (taskLists.length > 0) {
        showTask(taskLists);
    }
})


function showTask(taskLists) {
    const targetElem = document.getElementById('tableBody');
    let rowElement;
    taskLists.forEach((task, index) => {
        let btnValue = '完了';
        if (task.state === 'wip') {
            btnValue = '作業中';
        }
        rowElement = `
            <tr>
                <td>${index}</td>
                <td>${task.comment}</td>
                <td>
                    <button value="${task.state}">${btnValue}</button>
                    <button>削除</button>
                </td>
            </tr>`;
    });
    targetElem.insertAdjacentHTML('beforeEnd', rowElement);
}
