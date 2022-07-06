import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';


function App() {
    const Url = "http://localhost:5000/tasks";
    const [tasks, setTasks] = useState([])
    console.log(tasks);
       axios.get(Url)
        .then((response) => console.log(response.data.tasks))

        useEffect(() => {
            axios
              .get("http://localhost:5000/tasks")
              .then((res) => console.log(setTasks(res.data.tasks)))
              .catch((err) => console.log(err));
              
          }, []);
          

    return(
        
        <div>
            
            {tasks.map((currentTasks) => {
            return (
                tasks
            );
          })}
        </div>
    ); 
    

    }
export default App;