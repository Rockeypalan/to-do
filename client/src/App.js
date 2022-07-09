import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import List from "./components/list";

function App() {

    const [tasks, setTasks] = useState([]);
    const loadUsers = async() => {
        const response = await axios.get("http://localhost:5000/tasks")
        const data = await response.data.tasks;
        console.log(data);
        setTasks(data);
    };

    useEffect(()=> {
        axios.get("http://localhost:5000/tasks")
        .then((res) => setTasks(res.data.tasks))
        .catch((err) => console.log(err))
    loadUsers();
    }, []);

    const [text, setText] = useState(""); 
    const [isUpdating, setUpdating] = useState("");

    const addUpdateTask = () => {

        if (isUpdating === "") {
          axios.post("http://localhost:5000/tasks", { text })
            .then((res) => {
              console.log(res.data.tasks);
              setText("");
            })
            .catch((err) => console.log(err));
        }else{
          axios.put("http://localhost:5000/tasks/:id", { _id: isUpdating, text })
            .then((res) => {
              console.log(res.data.tasks);
              setText("");
              setUpdating("");
            })
            .catch((err) => console.log(err));
        }
      }
    const deleteTask = (_id) => {
        axios.delete("http://localhost:5000/tasks/:id", { _id })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    
      const updateTask = (_id, text) => {
        setUpdating(_id);
        setText(text);
      }
          

    return( 
        <div className='App'>
            <div className="container">
                <h1>TO-DO APP</h1>
                <div className='first'>
                    <input 
                        type="text"
                        placeholder="Write Somthing..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
                    <div className='btn btn-primary'onClick={addUpdateTask}>
                        {isUpdating ? "Update" : "Add"}
                        </div>
                </div>

            </div>
            <div className="list">
                
                    {tasks.map((task) => <List key={task._id} text={task.name}
                    remove={() => deleteTask(task._id)} 
                    update={() => updateTask(task._id, task.name)} />
                    
                                            )}
                
            </div>
        </div>
        
    )
    };
export default App;