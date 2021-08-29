import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "😅": " Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "🙂": "This is Fine",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🥰": "Love",
  "😘": "Face Blowing a Kiss",
  "🤐": "Zipper-Mouth Face",
  "😫": "Tired Face",
  "😞": "Disappointed Face",
  "😜": "Winking Face with Tongue"
};
var emojiWeKnow = Object.keys(emojiList);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiList[userInput];
    // console.log(event.target.value);

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiHandler(emoji) {
    var meaning = emojiList[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <br/>
      <h3>Emojis we know</h3>
      <br/>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.8rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer>
        <h2>I'd Love To Hear From You.</h2>
        <span>
          <a href="https://github.com/Manpreet-hub" className="link">
            Github
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/manpreet-singh-912ba3171/"
          >
            Linkedin
          </a>
        </span>
      </footer>
    </div>
  );
}
