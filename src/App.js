import "./styles.css";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <h1>Simple React Contact App</h1>
      <header>
        <div className="logo"></div>
        <h3>Phonebook</h3>
      </header>
      <Home />
      {/* <Create /> */}
    </div>
  );
};

export default App;
