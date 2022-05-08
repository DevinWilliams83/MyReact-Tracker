import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks' 
import Form from './components/Form' 


const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'Dental Appointment',
        day:'April 18 @ 10:30am',
        reminder: true,

    },
    {
        id: 2,
        text:'Zay`s Graduation',
        day:'April 22 @ 11:00am',
        reminder: true,
    },
    {
        id: 3,
        text:' Job Interview'  ,
        day:'April 27 @ 2:45pm',
        reminder: false,
    }

 ])  
    // Form
    const addTask = (task) => {
        console.log(task)

    }
  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }
  //Toggle Reminedr
  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  
  return (
    <div className="container">
      <Header />
      <Form onAdd={addTask} />
       {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle= {toggleReminder} /> : ' There are no tasks to be done. '}
    </div>
  );
}

export default App;
