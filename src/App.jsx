import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [bookName, setBookName] = useState([]);
  let [findBook, setFindBook] = useState("");

  const getBookName = async () => {
    let result = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=&{findBook}"
    );
    setBookName(result.data.items);
    console.log(result.data.items);
  };

  useEffect(() => {
    getBookName();
  }, []);

  return (
    <div className="App">
      {/* start coding here */}
      <h1>Find a Book</h1>
      <input
        type="text"
        onChange={(event) => {
          setFindBook(event.target.value);
        }}
        value={findBook}
      />
      {bookName.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.volumeInfo.title}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
