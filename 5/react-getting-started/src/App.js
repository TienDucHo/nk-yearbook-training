import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <Button> Clicked: </Button>
        <Button> Đã click: </Button>
        <Button> Mess with: </Button>
      </header>
    </div>
  );
}

export default App;
