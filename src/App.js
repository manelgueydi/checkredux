
import './App.css';
import AddTask from'./components/AddTask/AddTask';
import ListTask from'./components/ListTask/ListTask';
function App() {
  return (
    <div className="App">
      <h2>List to do</h2>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
