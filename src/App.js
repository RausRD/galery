import React from "react";
import "./index.scss";
import { Collection } from "./Collection";

function App() {
  const [collection, setCollection] = React.useState([]);

  React.useEffect(() => {
    fetch("https://647aea9bd2e5b6101db0a422.mockapi.io/photos")
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении даееых");
      });
  }, []);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {collection.map((obj) => (
          <Collection name={obj.name} images={obj.photos} />
        ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
