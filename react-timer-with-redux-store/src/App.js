import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { taskReducer, initialState } from './reducers/taskReducer';
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList';

const store = createStore(taskReducer, initialState);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <TaskCreator />
                <TaskList />
            </Provider>
        </div>
    );
}

export default App;
