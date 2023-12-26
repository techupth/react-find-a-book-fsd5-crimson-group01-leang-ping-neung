import "./App.css";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";

function App() {
  const [searchMessage, setSearchMessage] = useState("");
  const [bookList, setBookList] = useState([]);

  const getBookList = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchMessage}`
    );
    setBookList(result.data.items);
  };

  useEffect(() => {
    getBookList();
  }, [searchMessage]);

  const handleSearchMessage = (event) => {
    setSearchMessage(event.target.value);
  };

  return (
    <div className="App">
      <div className="find-a-book"></div>
      <h1>Find A Book</h1>
      <label>
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Enter your keywords here"
          value={searchMessage}
          onChange={handleSearchMessage}
        />
      </label>
      <ul className="book-list">
        {bookList.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
