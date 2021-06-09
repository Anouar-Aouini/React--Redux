import "./App.css";
import Tasks from "./Components/Tasks";

import AddTask from "./Components/Addtask";
import StatusTasks from "./Components/StatusTask";

function App() {
  return (
    <div className="App">
      <AddTask/>
      <Tasks />
    </div>
  );
}

export default App;
