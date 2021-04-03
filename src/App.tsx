import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
