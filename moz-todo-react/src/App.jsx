import "./App.css"

const subject = "React";

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
      </header>
      <button type="button" className="primary">Click me!</button>
    </>
  );
}

export default App;