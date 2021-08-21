import { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions/taskActions';

function TaskCreator({numOfTasks, addTask}) {

    const [time, setTime] = useState(0);
    const [name, setName] = useState('');
    const [timerId, setTimerId] = useState(null);

    function handleStart() {
        setTimerId(createInterval());
    }

    function createInterval() {
        return setInterval(
            () => setTime(prevTime => prevTime + 1),
            1000
        );
    }

    function handleStop() {
        if(time !== 0) {
            const task = {
                id: numOfTasks + 1,
                name,
                time
            }
            addTask(task);
        }

        clearInterval(timerId);
        setTimerId(null);
        setTime(0);
    }

    function handleTimeChange(event) {
        setTime(parseInt(event.target.value));
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function pauseTime() {
        clearInterval(timerId);
        setTimerId(null);
    }

    function resumeTime() {
        setTimerId(createInterval());
    }

    return(
        <div>
            <label for="taskName">Task name</label>
            <input id="taskName" type="text" value={name} onChange={handleNameChange}></input>
            <label for="taskTime">Time</label>
            <input id="taskTime" type="number" value={time} onChange={handleTimeChange} onFocus={pauseTime} onBlur={resumeTime}></input>
            <button id="startButton" onClick={handleStart}>START</button>
            <button id="stopButton" onClick={handleStop}>STOP</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfTasks: state.tasks.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);