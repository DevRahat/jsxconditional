// Conditional Rendering Option One

export default function Todo({task, isDone}){
    if(isDone ===true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work on: {task}</li>
    }
}

// conditional rendering Option 2
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task}</li>
}

// conditional rendering Option 3
export default function Todo({task, isDone}){
    
        return(
            <li> {isDone ? 'Finished': 'Work on'}:{task} </li>
        )
    
}

// conditional rendering option 4
export default function Todo({task, isDone}){
    
    return(
        <li>{task} {isDone && ':Done'} </li>
    )

}


// conditional rendering option 5
export default function Todo({task, isDone}){
    
    return(
        <li>{task} {isDone || ':Do iT'} </li>
    )

}