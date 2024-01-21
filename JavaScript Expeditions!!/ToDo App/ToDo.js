let todo = [];
console.log("Welcome")
let req = prompt("Enter choice:");
todochoice();
function todochoice(){

while(true){
    if (req=="quit"){
        console.log("Quitting Application");
        break;
    }

    if (req=="list"){
        if(todo.length==0){
            console.log("The List is Currently Empty");
            
        }
        console.log("List is being Displayed:")
        console.log(todo);
    }
    else if (req=="add"){
        let task = prompt("Please enter task to add");
        todo.push(task);
        console.log("Task added : "+task); 
    }
    else if (req=="delete"){
        let elsevar=0;
        console.log("Current list : "+todo);
        taskToDel = prompt("Enter Task to Delete");
        for(i=0;i<todo.length;i++){
        if(todo[i]==taskToDel){
            todo.splice(i,1);
            elsevar++;
        }
        }
        if(elsevar==0) {
            console.log("No such element found");
        }
        if(todo.length==0){
            console.log("The List is Empty");
            console.log("Resultant Array: "+todo);
        }
        else{
            console.log("Resultant Array: "+todo);
        }
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Enter choice:");
    if (req==null){
        break;
    }
}
}