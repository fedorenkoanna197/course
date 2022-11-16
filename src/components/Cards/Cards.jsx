import { useEffect, useState } from "react";

function Cards({ element, index }) {
  const [coment, setComent] = useState("");
  const [send, setSend] = useState();
  const [checked, setChecked] = useState(false);

  const sendComents = () => {
    const note = coment;
    setComent(" ");
    setSend(note);
    localStorage.setItem(index, JSON.stringify(note));
  };

  const click = (title) => {
    const prev = !checked;
    setChecked(prev);
    localStorage.setItem(title, JSON.stringify(prev));
  };
  return (
    <div className="card" id={index}>
      <div className="title">
        <h3>{element.title}</h3>
        <input
          checked={
            localStorage.getItem(element.title)
              ? JSON.parse(localStorage.getItem(element.title))
              : checked
          }
          onChange={() => click(element.title)}
          type="checkbox"
        />
      </div>
      <p>Type: {element.type}</p>
      {element.keyPoints !== undefined ? (
        <>
          <p>Key points : </p>
          <ul className="list">
            {element.keyPoints.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Links: </p>
          <ul className="list">
            {element.links.map((e, i) => (
              <li key={i}>
                <a href={e[1]}>{e[0]}</a>
              </li>
            ))}
          </ul>
        </>
      )}
      {element.youtube !== undefined ? (
        <p className="link">
          <a href={element.youtube}>YouTube</a>
        </p>
      ) : null}
      <p>Commentary on the lesson:</p>
      <p className="note">
        {localStorage.getItem(index)
          ? JSON.parse(localStorage.getItem(index))
          : send}
      </p>
      <textarea
        onChange={(e) => setComent(e.target.value)}
        name="commets"
        cols="30"
        rows="10"
        value={coment}
      ></textarea>
      <button onClick={() => sendComents(index)}>Send</button>
    </div>
  );
}

export default Cards;
