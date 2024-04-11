import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todo, setTodo] = useState([{task:"sample-task", id:uuidv4(), isDone: false}]);
    let [newTodo,setNewTodo]=useState("");

    let addTask=()=>{
        setTodo((prevTodo)=>{
            return [...prevTodo,{task:newTodo, id:uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
        setTodo((prevTodo)=>todo.filter((prevTodo)=> prevTodo.id !=id));
    };

    let markAllDone = () =>{
        setTodo((prevTodo)=>
        prevTodo.map((todo)=>{
            return{
                ...todo,isDone: true,
            };
            })
        );
    };

    let markAsDone = (id) =>{
        setTodo((prevTodo)=>
        prevTodo.map((todo)=>{
            if(todo.id === id){
                return{
                ...todo, isDone: true
            };
        }else{
            return todo;
        }
        })
        );
    };

    return(
        <>
        <h4>Todo List</h4>
        <div>
            <input placeholder="add a task" value={newTodo} 
            onChange={updateTodoValue}></input> 

            <button onClick={addTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            
            <hr></hr>
            <h4>Tasks to do</h4>
            <ul>
                {
                    todo.map((todo)=>(
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
                            &nbsp;
                            &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
        </>
    );
} 
