import { useState, useEffect } from "react";
import axios from "axios";

const Apifetch = () => {
  const [data, setData] = useState([]);
  const [letter, setLetter] = useState("a");

  useEffect(() => {
    if (letter === "") {
      setData([]);
      return;
    }

    if (/^[a-zA-Z]$/.test(letter)) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then((res) => {
          setData(res.data.meals || []);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter a valid letter (a-z)");
      setLetter("");
    }
  }, [letter]);

  return (
    <div style={{ padding: "20px", color: "#fff", backgroundColor: "black" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter a letter (a-z)"
          maxLength={1}
          onChange={(e) => setLetter(e.target.value.toLowerCase())}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            width: "200px",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            outline: "none",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data.length > 0 ? (
          data.map(({ idMeal, strMeal, strCategory }) => (
            <div
              key={idMeal}
              style={{
                backgroundColor: "#1a1a1a",
                flex: "1 1 calc(25% - 40px)", // 4 cards per row on large screens
                minWidth: "250px",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "#f0db4f",
                }}
              >
                {strMeal}
              </h1>
              <p style={{ fontSize: "16px", color: "#ccc" }}>
                Category: {strCategory}
              </p>
              <p style={{ fontSize: "14px", color: "#888" }}>ID: {idMeal}</p>
            </div>
          ))
        ) : (
          <p style={{ color: "#999" }}>No meals found.</p>
        )}
      </div>
    </div>
  );
};

export default Apifetch;
