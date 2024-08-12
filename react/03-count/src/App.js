import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Count from "./count/Count";
import Value from "./value/Value";
import TodoList from "./todolist/TodoList";
import TemperatureConverter from "./temperatureConverter/TemperatureConverter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/count" element={<Count />} />
            <Route path="/value" element={<Value />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/temper" element={<TemperatureConverter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
