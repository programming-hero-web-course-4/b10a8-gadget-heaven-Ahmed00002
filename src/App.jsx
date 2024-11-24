import "./App.css";

function App() {
  const data = () => {
    console.log("hello data");
  };
  return (
    <>
      <p>hello from react</p>
      <button
        className="bg-green-500 text-white font-3xl font-bold font-sora px-4 py-1 rounded-lg"
        onClick={data}
      >
        Click me
      </button>
    </>
  );
}

export default App;
