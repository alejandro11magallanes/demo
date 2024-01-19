import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <div className="header-titulo">
        <h1>Titulo del Portal</h1>
      </div>
      <div className="App-header">
        <div className="login-container">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
