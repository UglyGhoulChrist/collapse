import "./App.css";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div className="App">
      <h1>Я потренировался использовать композицию</h1>
      <Collapse />
      <div>
        Если подскажете как сделать чтобы этот текс плавно перемещался
        вверх/вниз при закрытии/открытии обоих элементов буду признателен.
      </div>
    </div>
  );
}

export default App;
