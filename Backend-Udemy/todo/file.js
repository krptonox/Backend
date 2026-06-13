const fs = require('fs');
const filePath = './example.json';


const loadTasks = () => {
    try{
       const dataBuffer =  fs.readFileSync(filePath)
       const dataJSON = dataBuffer.toString();
       return JSON.parse(dataJSON);
    }catch(error){
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJson);
    console.log('Tasks saved successfully.');
}

const listTasks = () => {
    const tasks = loadTasks();
    return tasks.forEach((task, index) => {
        console.log(`${index + 1}.${task.task}`)
    });
}

const addTask = (task) => {
      const tasks = loadTasks();
      tasks.push({task});
      saveTasks(tasks);
}

// const removeTask = (index1) => {
//     const tasks = loadTasks();
//     tasks.forEach((task, index) => {
//         if(`${index +1} == ${index1}`){
//             const data = tasks.splice(index,1);
//             saveTasks(data);
//         }
//         else{
//             console.log('Task not found');
//         }
//     })
// }

const removeTask = (index1) => {
    const tasks = loadTasks();

    if (Number.isNaN(index1) || index1 < 1 || index1 > tasks.length) {
        console.log('Task not found');
        return;
    }
    
    console.log(typeof(tasks[0]));
    tasks.splice(index1 - 1, 1);
    saveTasks(tasks);
}



const command = process.argv[2];
const arguments = process.argv[3];



if(command === 'add'){
    addTask(arguments);
}else if(command === 'list'){
    listTasks();
}else if(command === 'remove'){
    removeTask(parseInt(arguments));
}else{
    console.log('Unknown command. Please use "add", "list", or "remove".');
}

