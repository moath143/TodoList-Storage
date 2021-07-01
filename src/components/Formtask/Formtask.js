import React, {useState} from 'react'
import { useDispatch } from 'react-redux';


function Formtask() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch()

    const addTask = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TASK', payload: task})
    }
    return (
        <div className="col-md-12">
            <form>
                <input value={task} onChange={(e) => {setTask(e.target.value)}} maxLength='28' className='form-input' type="text" placeholder='type your task...' />
                <button onClick={addTask} className='btn btn-success  '>Add Task</button>
            </form>
        </div>
    );
}

export default Formtask
