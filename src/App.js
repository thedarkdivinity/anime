import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const App = () => {
  const [items, setItems] = useState([]);
  const [enteredText, setEnteredText] = useState("");
  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${enteredText}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setItems(data.results);
      });
  }, [enteredText]);
  return (
    <div>
      <h1 className="text-center text-danger">hi</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        onChange={(e) => setEnteredText(e.target.value)}
        value={enteredText}
      />
     
      
      <section>
          <div className="container">
        <div className="row">
        <div className="col-md-6 col-lg-6 col-10 mx-auto">
      {items.map((item) => {
        return (
          <>
         
          
          <Card item={item}/>
          
          </>
        );
      })}
      </div>
          </div>
          </div>
          </section>
      
    
    </div>
    
  );
};

export default App;
