import "./App.css";
import Card from "./components/Card";
import Switch from "./components/Switch";
import data from "./libs/data.json";
import { ThemeContextProvider } from "./ThemeContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <header className="App-header">
          <Switch></Switch>
        </header>
        <main>
          {data.map((cardData, index) => (
            <Card
              key={index}
              isPrimary={index === 0}
              title={cardData.title}
              content={cardData.content}
            />
          ))}
        </main>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
