import Home from "./Home";
// import Create from "./Create";

const App = () => {
  return (
    <div className="App">
      <h1>Simple React Contact App</h1>

      <header className="header">
        <div className="logo"></div>
        <h3>Phonebook</h3>
      </header>
      <Home />

      <div className="add">
        <a className="link" href="./Create">
          +
        </a>
      </div>

      {/* <Create /> */}
    </div>
  );
};

export default App;
