import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      <Todo text="Learn react"/>
      <Todo text="2 react"/>
      <Todo text="3 react"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
