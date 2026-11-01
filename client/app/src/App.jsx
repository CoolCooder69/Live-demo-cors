import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState(null);
  const [err, setErr] = useState(false);

  const handleOnClick = async () => {
    try {
      const res = await fetch("http://localhost:3000/getjokes");

      if (!res.ok) {
        throw new Error("Failed to fetch jokes");
      }

      const data = await res.json();

      console.log(data);

      setJokes(data.joke);
      setErr(false);

    } catch (e) {
      console.log(e);
      setErr(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 min-h-dvh min-w-dvw items-center justify-center font-sans">
        <h1 className="text-4xl">This is home page.</h1>

        <button
          onClick={handleOnClick}
          className="h-20 w-100 rounded-2xl p-5 border-2 text-2xl hover:cursor-pointer hover:animate-bounce bg-amber-200"
        >
          Get Joke
        </button>

        {jokes ? (
          <div className="h-full w-60 border-2 flex rounded-2xl justify-center items-center text-2xl bg-amber-200">
            Joke: {jokes}
          </div>
        ) : (
          <div className="bg-red-400 h-full w-60 text-center text-white rounded-2xl text-xl">
            {err ? "Something went wrong!" : "There is no joke"}
          </div>
        )}
      </div>
    </>
  );
}

export default App;