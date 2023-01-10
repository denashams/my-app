import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          {" "}
          <a
            href="https://github.com/denashams/my-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code on github
          </a>{" "}
          by Dena Shams
        </footer>
      </div>
    </div>
  );
}

export default App;
