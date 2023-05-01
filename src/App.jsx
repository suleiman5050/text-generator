import { useState } from "react";
import data from "./data";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
    console.log(amount);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          value={count}
          min="1"
          max="8"
          step="1"
          name="amount"
          id="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
