import { connect } from 'react-redux';

function TaskList({tasks}) {

    function listTasks() {
        const tasksList = [];
        tasks.forEach(task => {
            tasksList.push(
                <li>
                    <span id="taskId">{task.id} </span>
                    <span id="taskName">{task.name} </span>
                    <span id="taskTime">{task.time} </span>
                </li>
            );
        });
        return tasksList;
    }

    return(
        <div>
            <p>{tasks.length}</p>
            <ul>
                {tasks && listTasks()}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);