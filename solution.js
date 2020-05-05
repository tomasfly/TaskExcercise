// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let tests = ["test1","test2","test2a","test2b","test3","test4","test4a"]
let results = ["Wrong answer","OK","OK","Time limit exceeded","Time limit exceeded","OK","OK"]
let possibleOutputs = ["OK","Wrong answer","Time limit exceeded","Runtime error"]
let askName;

function solution(T, R) {
    // check if arrays have the same length
    if(T.length !== R.length){
        throw new Error('Arrays lenght dont match');s
    }

    //check array lenght
    if(T.length<1||T.length > 300){
        throw new Error('Arrays is to big');
    }

    //check if results have the correct string
    R.forEach(element => {
        if(!possibleOutputs.includes(element))
        {
            throw new Error('this result is not recognized as valid: '+element)
        }        
    });

    //look for duplicates
    if(checkDuplicates(T)){
        throw new Error('duplicates found on the T array')
    }

    //get task name
    taskName = getTaskName(T[0])
    taskNameIndex = getTaskNameIndex(T[0])

    //get number of groups
    checkAllTasksNames(taskNameIndex,taskName,T)

    //check task is pass
    checkTaskPass(T,taskNameIndex)




}

function checkTaskPass(array,taskName){

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
        let nextChar = element[taskName +1];

        
    }



    let points = 0;
    array.forEach(element => {
        console.log(element)
        let nextChar = element[taskName +1];
        // if (nextChar == null && ){

        // }
        
    });

}

function checkAllTasksNames(taskNameIndex,taskName,array){
    array.forEach(element => {
        console.log(element.substring(0,taskNameIndex)==taskName)
        if(!(element.substring(0,taskNameIndex)==taskName)){
            throw new Error('taskname incorrect')
        }        
    });

}

function getTaskName(task){
    let subVar;
    for (let index = 0; index < task.length; index++) {
        if(!isNaN(task[index])){
            console.log('index of first number is'+index)
            subVar = index;
            break;
        }        
    }
    console.log('task name is '+task.substring(0,subVar))
    return task.substring(0,subVar)
}

function getTaskNameIndex(task){
    let subVar;
    for (let index = 0; index < task.length; index++) {
        if(!isNaN(task[index])){
            console.log('index of first number is'+index)
            subVar = index;
            break;
        }        
    }
    console.log('task name is '+task.substring(0,subVar))
    return subVar
}

function checkTask(task){

    for (let index = 0; index < task.length; index++) {
        if(!isNaN(task[index])){
            console.log('index of first number is'+index)
        }        
    }
}

function checkDuplicates(array){
    return new Set(array).size !== array.length 
}

solution(tests,results)
